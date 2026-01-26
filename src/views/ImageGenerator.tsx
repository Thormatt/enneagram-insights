import React, { useState, useRef, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toPng } from 'html-to-image';
import { getAllTypes } from '../data/core/types';
import { getSubtypesByType } from '../data/instincts/subtypes';
import { getSubtypeRelationshipStory } from '../data/stories/subtype-relationship-stories';
import type { InstinctType, TypeNumber } from '../types';
import './ImageGenerator.css';

const ImageGenerator: React.FC = () => {
    const [searchParams] = useSearchParams();

    // Parse URL query parameters for initial state
    const parseTypeParam = (param: string | null, defaultVal: TypeNumber): TypeNumber => {
        if (param) {
            const num = parseInt(param, 10);
            if (num >= 1 && num <= 9) return num as TypeNumber;
        }
        return defaultVal;
    };

    const parseInstinctParam = (param: string | null, defaultVal: InstinctType): InstinctType => {
        if (param && ['sp', 'so', 'sx'].includes(param)) {
            return param as InstinctType;
        }
        return defaultVal;
    };

    const initialMode = searchParams.get('mode') === 'compare' ? 'compare' : 'single';
    const [mode, setMode] = useState<'single' | 'compare'>(initialMode);

    // Single Mode State
    const [selectedTypeNum, setSelectedTypeNum] = useState<TypeNumber>(
        parseTypeParam(searchParams.get('type'), 1)
    );
    const [selectedInstinct, setSelectedInstinct] = useState<InstinctType | 'all'>('all');

    // Compare Mode State
    const [compType1, setCompType1] = useState<TypeNumber>(
        parseTypeParam(searchParams.get('type1'), 4)
    );
    const [compSubtype1, setCompSubtype1] = useState<InstinctType>(
        parseInstinctParam(searchParams.get('subtype1'), 'sp')
    );
    const [compType2, setCompType2] = useState<TypeNumber>(
        parseTypeParam(searchParams.get('type2'), 5)
    );
    const [compSubtype2, setCompSubtype2] = useState<InstinctType>(
        parseInstinctParam(searchParams.get('subtype2'), 'sx')
    );

    const ref = useRef<HTMLDivElement>(null);

    const enneagramTypes = getAllTypes();

    // Single Mode Data
    const currentType = enneagramTypes.find(t => t.number === selectedTypeNum);
    const subtypes = getSubtypesByType(selectedTypeNum);
    const currentSubtype = selectedInstinct !== 'all'
        ? subtypes.find(s => s.instinct === selectedInstinct)
        : null;

    // Compare Mode Data
    const type1Data = enneagramTypes.find(t => t.number === compType1);
    const type2Data = enneagramTypes.find(t => t.number === compType2);
    const story = getSubtypeRelationshipStory(compType1, compSubtype1, compType2, compSubtype2);

    const handleDownload = useCallback(async () => {
        if (ref.current === null) {
            return;
        }

        try {
            const dataUrl = await toPng(ref.current, { cacheBust: true, pixelRatio: 2 });
            const link = document.createElement('a');
            const filename = mode === 'single'
                ? `enneagram-type-${selectedTypeNum}${currentSubtype ? `-${currentSubtype.instinct}` : ''}.png`
                : `enneagram-compare-${compType1}${compSubtype1}-vs-${compType2}${compSubtype2}.png`;

            link.download = filename;
            link.href = dataUrl;
            link.click();
        } catch (err) {
            console.error('oops, something went wrong!', err);
        }
    }, [ref, mode, selectedTypeNum, currentSubtype, compType1, compSubtype1, compType2, compSubtype2]);

    if (!currentType && mode === 'single') return <div>Type not found</div>;

    // --- Render Helpers ---

    const renderSingleCardContent = () => {
        if (currentSubtype) {
            return (
                <>
                    <div className="card">
                        <h3 className="card-title">Key Characteristics</h3>
                        <p className="card-text">
                            {currentSubtype.characteristics.slice(0, 3).join('. ')}.
                        </p>
                    </div>
                    <div className="card">
                        <h3 className="card-title">Growth Path</h3>
                        <p className="card-text">{currentSubtype.growthPath}</p>
                    </div>
                    <div className="card quote-card">
                        <p className="quote-text">"{currentSubtype.ichazoTitle}"</p>
                    </div>
                </>
            );
        }

        return (
            <>
                <div className="card">
                    <h3 className="card-title">Core Fear</h3>
                    <p className="card-text">{currentType?.coreFear}</p>
                </div>
                <div className="card">
                    <h3 className="card-title">Core Desire</h3>
                    <p className="card-text">{currentType?.coreDesire}</p>
                </div>
                <div className="card quote-card">
                    <p className="quote-text">"{currentType?.keyMotivations[0]}"</p>
                </div>
            </>
        );
    };

    const renderSingleMode = () => {
        if (!currentType) return <div>Type not found</div>; // Should not happen if check above is correct

        const displayTitle = currentSubtype ? currentSubtype.name : currentType.name;
        const displayDesc = currentSubtype ? currentSubtype.description : currentType.briefDescription;

        return (
            <div className="warm-editorial">
                <div className="page">
                    <div className="header">
                        <div className="logo">Enneagram Sync</div>
                        <div className="nav">
                            <span>Circle</span>
                            <span>Mind Map</span>
                            <span>Compare</span>
                            <span>Profile</span>
                        </div>
                    </div>

                    <div className="hero">
                        <div className="type-badge">
                            <span>{currentType.center.charAt(0).toUpperCase() + currentType.center.slice(1)} Center</span>
                            {currentSubtype && (
                                <>
                                    <span>•</span>
                                    <span>{currentSubtype.instinct.toUpperCase()}</span>
                                </>
                            )}
                        </div>

                        <div className="type-number">
                            {currentType.number}
                            {currentSubtype && <span style={{ fontSize: '0.4em', marginLeft: '10px', verticalAlign: 'middle', opacity: 0.6 }}>{currentSubtype.instinct}</span>}
                        </div>

                        <h1 className="type-name">{displayTitle}</h1>
                        <p className="type-desc">
                            {displayDesc}
                        </p>
                    </div>

                    <div className="content">
                        {renderSingleCardContent()}
                    </div>
                </div>
            </div>
        );
    };

    const renderCompareMode = () => {
        if (!type1Data || !type2Data || !story) return <div>Invalid Comparison Data</div>;

        return (
            <div className="warm-editorial">
                <div className="comparison-layout">
                    <div className="comparison-header">
                        Enneagram Sync Relations
                    </div>

                    <div className="comparison-content">
                        <div className="types-row">
                            <div className="type-pill">
                                <div className="type-circle">
                                    <span className="number">{type1Data.number}</span>
                                    <div className="subtype-badge">{compSubtype1}</div>
                                </div>
                                <div className="type-label">{type1Data.name}</div>
                            </div>

                            <div className="vs-badge">VS</div>

                            <div className="type-pill">
                                <div className="type-circle">
                                    <span className="number">{type2Data.number}</span>
                                    <div className="subtype-badge">{compSubtype2}</div>
                                </div>
                                <div className="type-label">{type2Data.name}</div>
                            </div>
                        </div>

                        <div className="story-title-group">
                            <h1 className="story-title">{story.title}</h1>
                            <h2 className="story-subtitle">{story.subtitle}</h2>
                        </div>

                        <div className="comparison-footer">
                            <span>Relationship Dynamics</span>
                            <span>Enneagram Sync</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="image-generator-container">
            <div className="controls">
                <div style={{ marginRight: '20px', display: 'flex', gap: '8px' }}>
                    <button
                        onClick={() => setMode('single')}
                        style={{ background: mode === 'single' ? '#6366f1' : '#2a2a40' }}
                    >
                        Single Type
                    </button>
                    <button
                        onClick={() => setMode('compare')}
                        style={{ background: mode === 'compare' ? '#6366f1' : '#2a2a40' }}
                    >
                        Comparison Cover
                    </button>
                </div>

                {mode === 'single' ? (
                    <>
                        <select
                            value={selectedTypeNum}
                            onChange={(e) => {
                                setSelectedTypeNum(Number(e.target.value) as TypeNumber);
                                setSelectedInstinct('all');
                            }}
                        >
                            {enneagramTypes.map(t => (
                                <option key={t.number} value={t.number}>{t.number}</option>
                            ))}
                        </select>

                        <select
                            value={selectedInstinct}
                            onChange={(e) => setSelectedInstinct(e.target.value as any)}
                        >
                            <option value="all">Core</option>
                            <option value="sp">Self-Pres (SP)</option>
                            <option value="so">Social (SO)</option>
                            <option value="sx">Sexual (SX)</option>
                        </select>
                    </>
                ) : (
                    <>
                        {/* Type 1 Selectors */}
                        <div style={{ display: 'flex', gap: '4px', alignItems: 'center', borderRight: '1px solid #444', paddingRight: '10px' }}>
                            <span>T1:</span>
                            <select value={compType1} onChange={(e) => setCompType1(Number(e.target.value) as TypeNumber)}>
                                {enneagramTypes.map(t => <option key={t.number} value={t.number}>{t.number}</option>)}
                            </select>
                            <select value={compSubtype1} onChange={(e) => setCompSubtype1(e.target.value as InstinctType)}>
                                <option value="sp">sp</option>
                                <option value="so">so</option>
                                <option value="sx">sx</option>
                            </select>
                        </div>

                        {/* Type 2 Selectors */}
                        <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                            <span>T2:</span>
                            <select value={compType2} onChange={(e) => setCompType2(Number(e.target.value) as TypeNumber)}>
                                {enneagramTypes.map(t => <option key={t.number} value={t.number}>{t.number}</option>)}
                            </select>
                            <select value={compSubtype2} onChange={(e) => setCompSubtype2(e.target.value as InstinctType)}>
                                <option value="sp">sp</option>
                                <option value="so">so</option>
                                <option value="sx">sx</option>
                            </select>
                        </div>
                    </>
                )}

                <button onClick={handleDownload} style={{ marginLeft: 'auto' }}>Download Image</button>
            </div>

            <div className={mode === 'compare' ? "warm-editorial-frame comparison-frame" : "warm-editorial-frame"} ref={ref}>
                {mode === 'single' ? renderSingleMode() : renderCompareMode()}
            </div>

            <div style={{ marginTop: '20px', color: '#888', fontSize: '12px' }}>
                <p>Preview moves with container size, but download will be 1080x1080.</p>
            </div>
        </div>
    );
};

export default ImageGenerator;
