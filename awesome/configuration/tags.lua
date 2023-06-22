local awful = require("awful")

--- Tags
screen.connect_signal("request::desktop_decoration", function(s)

	--- Each screen has its own tag table
	awful.tag({ "1", "2", "3", "4", "5" }, s, awful.layout.layouts[1])

	s.tags[1]:view_only()
end)

screen.connect_signal("added", function() awesome.restart() end)
screen.connect_signal("removed", function() awesome.restart() end)
