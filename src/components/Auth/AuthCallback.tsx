import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';

export function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleCallback = async () => {
      const { error } = await supabase.auth.exchangeCodeForSession(window.location.href);

      if (error) {
        console.error('Auth callback error:', error);
        navigate('/?error=auth_failed');
        return;
      }

      // Redirect to profile page after successful auth
      navigate('/?view=profile');
    };

    handleCallback();
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-600 mx-auto mb-4" />
        <p className="text-stone-600">Completing sign in...</p>
      </div>
    </div>
  );
}
