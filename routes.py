import flask

def create_routes(server):

    @server.route("/")
    def main(): # pylint: disable=unused-variable
        return flask.send_file("./static/index.html")