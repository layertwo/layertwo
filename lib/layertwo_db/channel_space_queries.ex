defmodule LayertwoDb.ChannelSpaceQueries do
  def get_entity_channel_permission_and_ws_uuid(socket) do
    entity_uuid = socket.assigns["entity_uuid"]

    check_db_entity_query = "MATCH (Entity {entity_uuid: {entity_param}}) return Entity.channel_space, Entity.entity_ws_uuid"

    check_db_entity_params = %{entity_param: entity_uuid}

    db_conn = Bolt.Sips.conn()
    db_query_result = Bolt.Sips.query(db_conn, check_db_entity_query, check_db_entity_params)

    case db_query_result do
      {:ok, []} -> {:error, socket}
      {:error, _reason} -> {:error, socket}
      {:ok, [%{"Entity.channel_space" => db_entity_channel_permission, "Entity.entity_ws_uuid" => db_entity_ws_uuid}]} -> {:ok, socket, db_entity_channel_permission, db_entity_ws_uuid}
    end
  end
end