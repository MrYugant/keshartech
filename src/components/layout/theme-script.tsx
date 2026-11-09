import { THEME_STORAGE_KEY } from "@/config/theme";

/**
 * Runs before first paint: applies the saved theme (light by default) and
 * marks JS as available so scroll-reveal styles can safely hide content.
 */
const script = `(function(){try{var d=document.documentElement;d.classList.add('js');var t=localStorage.getItem('${THEME_STORAGE_KEY}');if(t==='dark'){d.classList.add('dark')}}catch(e){}})();`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
