PELICAN ?= uv run pelican
PELICANOPTS =

BASEDIR := $(CURDIR)
INPUTDIR := $(BASEDIR)/content
OUTPUTDIR := $(BASEDIR)/output
CONFFILE := $(BASEDIR)/pelicanconf.py
PUBLISHCONF := $(BASEDIR)/publishconf.py

GITHUB_PAGES_BRANCH := main
GITHUB_PAGES_COMMIT_MESSAGE := Generate Pelican site

CONTAINER_IMAGE_NAME := pelican-dev

SERVER ?= 0.0.0.0
PORT ?= 8000

DEBUG ?= 0
ifeq ($(DEBUG), 1)
	PELICANOPTS += -D
endif

RELATIVE ?= 0
ifeq ($(RELATIVE), 1)
	PELICANOPTS += --relative-urls
endif

ifneq ($(PORT),)
	PELICANOPTS += -p $(PORT)
endif


.PHONY: help html clean serve dev publish github build run

help:
	@echo 'Makefile for Pelican site'
	@echo ''
	@echo 'Usage:'
	@echo '  make html                 Build site'
	@echo '  make clean                Remove output files'
	@echo '  make serve [PORT=8000]    Serve site locally'
	@echo '  make dev                 Serve with live reload'
	@echo '  make publish             Build for production'
	@echo '  make github              Deploy to GitHub Pages'
	@echo '  make build/run           Docker workflow'
	@echo ''
	@echo 'Options:'
	@echo '  DEBUG=1                  Enable debug output'
	@echo '  RELATIVE=1               Use relative URLs'

html:
	$(PELICAN) $(INPUTDIR) -o $(OUTPUTDIR) -s $(CONFFILE) $(PELICANOPTS)

clean:
	rm -rf $(OUTPUTDIR)

serve:
	$(PELICAN) -l $(INPUTDIR) -o $(OUTPUTDIR) -s $(CONFFILE) $(PELICANOPTS) -b $(SERVER)

dev:
	$(PELICAN) -lr $(INPUTDIR) -o $(OUTPUTDIR) -s $(CONFFILE) $(PELICANOPTS) -b $(SERVER)

publish:
	$(PELICAN) $(INPUTDIR) -o $(OUTPUTDIR) -s $(PUBLISHCONF) $(PELICANOPTS)

github: publish
	uv run ghp-import -m "$(GITHUB_PAGES_COMMIT_MESSAGE)" -b $(GITHUB_PAGES_BRANCH) $(OUTPUTDIR) --no-jekyll
	git push origin $(GITHUB_PAGES_BRANCH)

build:
	docker build -t $(CONTAINER_IMAGE_NAME) .

run: build
	docker run -p 8000:8000 -it --rm -v $(CURDIR):/app $(CONTAINER_IMAGE_NAME)

