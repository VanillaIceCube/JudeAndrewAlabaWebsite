from django.core.management.utils import get_random_secret_key
from dotenv import load_dotenv
from pathlib import Path
import dj_database_url
import sys
import os


load_dotenv() 

BASE_DIR = Path(__file__).resolve().parent.parent

# Env Settings
ALLOWED_HOSTS = os.getenv('DJANGO_ALLOWED_HOSTS', '127.0.0.1,localhost').split(',')
SECRET_KEY = os.getenv('DJANGO_SECRET_KEY', get_random_secret_key())

DEVELOPMENT_MODE = os.getenv("DEVELOPMENT_MODE", "False") == "True"
DEBUG = os.getenv('DEBUG', 'False') == 'True'

# Application Definition
INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "corsheaders",
    "api",
]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "corsheaders.middleware.CorsMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

CORS_ALLOWED_ORIGINS = [
    "https://jude-andrew-alaba-peaab.ondigitalocean.app",
]

ROOT_URLCONF = "backend.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "backend.wsgi.application"

# Database configuration
if DEVELOPMENT_MODE:
    # Use SQLite database for development
    DATABASES = {
        "default": {
            "ENGINE": "django.db.backends.sqlite3",
            "NAME": os.path.join(BASE_DIR, "db.sqlite3"),
        }
    }
else:
    # Check if we are not running the 'collectstatic' command
    if len(sys.argv) > 1 and sys.argv[1] != 'collectstatic':
        # Get the DATABASE_URL environment variable
        DATABASE_URL = os.getenv("DATABASE_URL")
        
        # Raise an exception if DATABASE_URL is not defined
        if not DATABASE_URL:
            raise Exception("DATABASE_URL environment variable not defined")
        
        # Parse the DATABASE_URL to configure the production database
        DATABASES = {
            "default": dj_database_url.parse(DATABASE_URL),
        }

# Password validation
AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]

# Internationalization
LANGUAGE_CODE = "en-us"
TIME_ZONE = "America/Los_Angeles"
USE_I18N = True
USE_TZ = True

# Static files (CSS, JavaScript, Images)
STATIC_URL = "api/static/"
STATIC_ROOT = os.path.join(BASE_DIR, "staticfiles")

# Default primary key field type
DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"