AUTHOR = 'Luis David Garcia'
SITENAME = 'Luis\'s Portfolio. Lets Collobrate!'
SITEURL = ""

PATH = "content"

TIMEZONE = 'America/Los_Angeles'

DEFAULT_LANG = 'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

DEFAULT_PAGINATION = 10

# Theme
THEME = 'themes/minimal-xy'

# Pages config for custom slugs (optional, but helps avoid clutter)
PAGE_URL = '{slug}.html'
PAGE_SAVE_AS = '{slug}.html'

STATIC_PATHS = ['images', 'extras']
EXTRA_PATH_METADATA = {
    'extras/favicon.ico': {'path': 'favicon.ico'},
}

# Uncomment following line if you want document-relative URLs when developing
# RELATIVE_URLS = True
