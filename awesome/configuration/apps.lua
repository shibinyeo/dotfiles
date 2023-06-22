local filesystem = require("gears.filesystem")
local config_dir = filesystem.get_configuration_dir()

return {
	--- Default Applications
	default = {
		terminal = "gnome-terminal",
		text_editor = "vim",
		web_browser = "microsoft-edge-beta",
		file_manager = "nautilus",
		app_launcher = "rofi -no-lazy-grab -show drun -modi drun -theme " .. config_dir .. "configuration/rofi.rasi",
	},
}
