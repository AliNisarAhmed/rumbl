defmodule RumblWeb.WatchView do

  use RumblWeb, :view

  def player_id(video) do
    ~r{https:\/\/www.youtube\.com\/watch\?v=(?<id>[a-zA-Z\-0-9^#&?]*)}
    |> Regex.named_captures(video.url)
    |> get_in(["id"])
  end

end
