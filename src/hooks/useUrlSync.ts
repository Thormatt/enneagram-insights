import { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppStore } from '../stores';
import type { TypeNumber, ViewMode, CircleLayer, DiagramType, InstinctType } from '../types';

// Valid values for type safety
const VALID_TYPES: TypeNumber[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const VALID_VIEWS: ViewMode[] = ['circle', 'diagrams', 'compare', 'detail', 'quiz', 'profile', 'transcendence', 'tritypes', 'scenarios', 'wisdomLineage'];
const VALID_LAYERS: CircleLayer[] = ['basic', 'dynamics', 'groups', 'subtypes'];
const VALID_DIAGRAMS: DiagramType[] = ['centers', 'triads', 'relationships'];
const VALID_INSTINCTS: InstinctType[] = ['sp', 'so', 'sx'];

// Parse and validate URL params
function parseTypeNumber(value: string | null): TypeNumber | null {
  if (!value) return null;
  const num = parseInt(value, 10);
  return VALID_TYPES.includes(num as TypeNumber) ? (num as TypeNumber) : null;
}

function parseViewMode(value: string | null): ViewMode | null {
  if (!value) return null;
  return VALID_VIEWS.includes(value as ViewMode) ? (value as ViewMode) : null;
}

function parseCircleLayer(value: string | null): CircleLayer | null {
  if (!value) return null;
  return VALID_LAYERS.includes(value as CircleLayer) ? (value as CircleLayer) : null;
}

function parseDiagramType(value: string | null): DiagramType | null {
  if (!value) return null;
  return VALID_DIAGRAMS.includes(value as DiagramType) ? (value as DiagramType) : null;
}

function parseInstinct(value: string | null): InstinctType | null {
  if (!value) return null;
  return VALID_INSTINCTS.includes(value as InstinctType) ? (value as InstinctType) : null;
}

/**
 * Hook that syncs Zustand state with URL query params.
 *
 * URL format:
 * - ?view=circle&type=4 - Circle view with Type 4 selected
 * - ?view=compare&type=4&compare=7 - Compare Type 4 and 7
 * - ?view=detail&type=4 - Deep dive into Type 4
 * - ?view=quiz - Quiz view
 * - ?view=diagrams&diagram=triads - Diagrams view
 */
export function useUrlSync() {
  const [searchParams, setSearchParams] = useSearchParams();
  const isInitialized = useRef(false);
  const isUpdatingFromUrl = useRef(false);

  // Get state and actions from store
  const viewMode = useAppStore((state) => state.viewMode);
  const selectedType = useAppStore((state) => state.selectedType);
  const compareTypes = useAppStore((state) => state.compareTypes);
  const circleLayer = useAppStore((state) => state.circleLayer);
  const diagramType = useAppStore((state) => state.diagramType);
  const selectedSubtype = useAppStore((state) => state.selectedSubtype);

  const setViewMode = useAppStore((state) => state.setViewMode);
  const setSelectedType = useAppStore((state) => state.setSelectedType);
  const setCompareTypes = useAppStore((state) => state.setCompareTypes);
  const setCircleLayer = useAppStore((state) => state.setCircleLayer);
  const setDiagramType = useAppStore((state) => state.setDiagramType);
  const selectSubtype = useAppStore((state) => state.selectSubtype);

  // On mount: Read URL and update store
  useEffect(() => {
    if (isInitialized.current) return;
    isInitialized.current = true;

    const urlView = parseViewMode(searchParams.get('view'));
    const urlType = parseTypeNumber(searchParams.get('type'));
    const urlCompare = parseTypeNumber(searchParams.get('compare'));
    const urlLayer = parseCircleLayer(searchParams.get('layer'));
    const urlDiagram = parseDiagramType(searchParams.get('diagram'));
    const urlInstinct = parseInstinct(searchParams.get('instinct'));

    // Only update from URL if there are meaningful params
    const hasUrlParams = urlView || urlType || urlCompare;
    if (!hasUrlParams) return;

    isUpdatingFromUrl.current = true;

    // Apply URL state to store
    if (urlView) setViewMode(urlView);
    if (urlType) setSelectedType(urlType);
    if (urlCompare && urlType) {
      setCompareTypes([urlType, urlCompare]);
      if (!urlView) setViewMode('compare');
    }
    if (urlLayer) setCircleLayer(urlLayer);
    if (urlDiagram) setDiagramType(urlDiagram);
    if (urlInstinct) selectSubtype(urlInstinct);

    // Small delay to prevent immediate URL update
    setTimeout(() => {
      isUpdatingFromUrl.current = false;
    }, 100);
  }, [searchParams, setViewMode, setSelectedType, setCompareTypes, setCircleLayer, setDiagramType, selectSubtype]);

  // On state change: Update URL
  useEffect(() => {
    if (!isInitialized.current || isUpdatingFromUrl.current) return;

    const params = new URLSearchParams();

    // Always include view if not default
    if (viewMode !== 'circle') {
      params.set('view', viewMode);
    }

    // Include type if selected
    if (selectedType) {
      params.set('type', String(selectedType));
    }

    // Include compare type for comparison view
    if (viewMode === 'compare' && compareTypes) {
      params.set('type', String(compareTypes[0]));
      params.set('compare', String(compareTypes[1]));
    }

    // Include layer if not default (only for circle view)
    if (viewMode === 'circle' && circleLayer !== 'basic') {
      params.set('layer', circleLayer);
    }

    // Include diagram type if not default (only for diagrams view)
    if (viewMode === 'diagrams' && diagramType !== 'centers') {
      params.set('diagram', diagramType);
    }

    // Include instinct if selected
    if (selectedSubtype) {
      params.set('instinct', selectedSubtype);
    }

    // Update URL without adding to history for minor changes
    const newSearch = params.toString();
    const currentSearch = searchParams.toString();

    if (newSearch !== currentSearch) {
      setSearchParams(params, { replace: true });
    }
  }, [viewMode, selectedType, compareTypes, circleLayer, diagramType, selectedSubtype, searchParams, setSearchParams]);

  // Handle browser back/forward
  useEffect(() => {
    const handlePopState = () => {
      isInitialized.current = false;
      // Re-run initialization on next render
      setTimeout(() => {
        isInitialized.current = false;
      }, 0);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);
}
