import flask
import routes

server = flask.Flask(__name__, static_folder="./static", static_url_path="")

routes.create_routes(server)

server.run()