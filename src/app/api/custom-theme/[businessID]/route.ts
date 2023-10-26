import { createCSSThemeString, getThemeByBusinessID } from '@/lib';

type RouteHandler = (req: Request) => Response;

export const GET: RouteHandler = (req) => {
  const url = new URL(req.url);

  const businessId = url.pathname.split('/').at(3) ?? '';

  // replace this code with an API request to get the theme via the businessId
  const themesOptions = new Map<string, string>();
  themesOptions.set('1', 'primary');
  themesOptions.set('2', 'secondary');
  themesOptions.set('3', 'tertiary');

  const currentTheme = themesOptions.get(businessId) ?? 'primary';
  const theme = getThemeByBusinessID(currentTheme);

  const cssString = createCSSThemeString(theme);

  return new Response(cssString, {
    headers: {
      'Content-Type': 'text/css; charset=utf-8',
    },
  });
};
