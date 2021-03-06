use Mix.Config

# For production, don't forget to configure the url host
# to something meaningful, Phoenix uses this information
# when generating URLs.
#
# Note we also include the path to a cache manifest
# containing the digested version of static files. This
# manifest is generated by the `mix phx.digest` task,
# which you should run after static files are built and
# before starting your production server.
#config :layertwo, LayertwoWeb.Endpoint,
#  load_from_system_env: true,
#  http: [port: {:system, "PORT"}],
#  url: [scheme: "https", host: System.get_env("HOST_NAME"), port: 443],
#  force_ssl: [rewrite_on: [:x_forwarded_proto]],
#  cache_static_manifest: "priv/static/cache_manifest.json",
#  secret_key_base: System.get_env("LAYERTWO_SECRET_KEY_BASE")

# Do not print debug messages in production
config :logger, level: :info

# ## SSL Support
#
# To get SSL working, you will need to add the `https` key
# to the previous section and set your `:url` port to 443:
#
     config :layertwo, LayertwoWeb.Endpoint,
       http: [port: 80],
       url: [host: "layertwo.org", port: 443],
       force_ssl: [hsts: true],
       https: [
        :inet6,
         port: 443,
         cipher_suite: :strong,
         keyfile: System.get_env("SSL_PRIV_KEY"),
         certfile: System.get_env("SSL_CHAIN")
       ]
#
# The `cipher_suite` is set to `:strong` to support only the
# latest and more secure SSL ciphers. This means old browsers
# and clients may not be supported. You can set it to
# `:compatible` for wider support.
#
# `:keyfile` and `:certfile` expect an absolute path to the key
# and cert in disk or a relative path inside priv, for example
# "priv/ssl/server.key". For all supported SSL configuration
# options, see https://hexdocs.pm/plug/Plug.SSL.html#configure/1
#
# We also recommend setting `force_ssl` in your endpoint, ensuring
# no data is ever sent via http, always redirecting to https:
#
#     config :layertwo, LayertwoWeb.Endpoint,
#       force_ssl: [hsts: true]
#
# Check `Plug.SSL` for all available options in `force_ssl`.

# ## Using releases (distillery)
#
# If you are doing OTP releases, you need to instruct Phoenix
# to start the server for all endpoints:
#
#     config :phoenix, :serve_endpoints, true
#
# Alternatively, you can configure exactly which server to
# start per endpoint:
#
#     config :layertwo, LayertwoWeb.Endpoint, server: true
#
# Note you can't rely on `System.get_env/1` when using releases.
# See the releases documentation accordingly.

# Finally import the config/prod.secret.exs which should be versioned
# separately.
import_config "prod.secret.exs"
