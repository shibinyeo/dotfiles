local awful = require("awful")
local beautiful = require("beautiful")
local ruled = require("ruled")
local helpers = require("helpers")

--- Get screen geometry
local screen_width = awful.screen.focused().geometry.width
local screen_height = awful.screen.focused().geometry.height

ruled.client.connect_signal("request::rules", function()
	--- Global
	ruled.client.append_rule({
		id = "global",
		rule = {},
		properties = {
			raise = true,
			size_hints_honor = false,
			honor_workarea = true,
			honor_padding = true,
			screen = awful.screen.focused,
			focus = awful.client.focus.filter,
			titlebars_enabled = beautiful.titlebar_enabled,
			placement = awful.placement.no_overlap + awful.placement.no_offscreen,
		},
	})

	--- Float and Centered
	ruled.client.append_rule({
		id = "floating",
		rule_any = {
			instance = {
				"Devtools", --- Firefox devtools
			},
			class = {
				"Lxappearance",
				"Nm-connection-editor",
			},
			name = {
				"Event Tester", -- xev
			},
			role = {
				"AlarmWindow",
				"pop-up",
				"GtkFileChooserDialog",
				"conversation",
			},
			type = {
				"dialog",
			},
		},
		properties = {
			floating = true,
			placement = helpers.client.centered_client_placement
		},
	})

	--- Image Viewers
	ruled.client.append_rule({
		rule_any = {
			class = {
				"feh",
				"imv",
			},
		},
		properties = {
			floating = true,
			width = screen_width * 0.7,
			height = screen_height * 0.75,
		},
		callback = function(c)
			awful.placement.centered(c, { honor_padding = true, honor_workarea = true })
		end,
	})

	--- Set size of Telegram
	ruled.client.append_rule({
		rule_any = {
			class = {
				"TelegramDesktop",
			},
		},
		properties = {
			floating = true,
			width = screen_width * 0.40,
			height = screen_height * 0.90,
			placement = helpers.client.centered_client_placement,
		},
	})

	--- Set which tag to open Edge
	ruled.client.append_rule({
		rule_any = {
			class = {
				"Microsoft-edge-beta",
			},
		},
		properties = {
			tag = "1",
		},
	})

	--- Set which tag to open Clock
	ruled.client.append_rule({
		rule_any = {
			class = {
				"org.gnome.clocks",
			},
		},
		properties = {
			tag = "5",
		},
	})

	--- Set which tag to open Spotify
	ruled.client.append_rule({
		rule_any = {
			class = {
				"Spotify",
			},
		},
		properties = {
			tag = "5",
		},
	})

	--- Set which tag to open edex-ui
-- 	ruled.client.append_rule({
-- 		rule_any = {
-- 			class = {
-- 				"eDEX-UI",
-- 			},
-- 		},
-- 		properties = {
-- 			tag = "5",
-- 		},
-- 	})

	--- Set which tag to open Obsidian
	ruled.client.append_rule({
		rule_any = {
			class = {
				"obsidian",
			},
		},
		properties = {
			tag = "2",
		},
	})

	--- Set which tag to open Anki
	ruled.client.append_rule({
		rule_any = {
			class = {
				"Anki",
			},
		},
		properties = {
			tag = "3",
		},
	})

end)
