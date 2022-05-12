import json

from jupyter_server.base.handlers import APIHandler
from jupyter_server.utils import url_path_join
import tornado
from tornado.web import StaticFileHandler

from os import path


ROOT = path.dirname(__file__)
PUBLIC = path.join(ROOT, 'gazebo')


def setup_handlers(web_app):
    host_pattern = ".*$"

    base_url = web_app.settings["base_url"]
    url_path = 'gazebo'
    route_gazebo = url_path_join(base_url, url_path, "app")

    print(f"adding route for static file handler: {route_gazebo}")
    print(f"serving files: {PUBLIC}")

    handlers = [
        ("{}/(.*)".format(route_gazebo), StaticFileHandler, {"path": PUBLIC})
    ]
    web_app.add_handlers(host_pattern, handlers)