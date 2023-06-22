local awful = require("awful")
local hotkeys_popup = require("awful.hotkeys_popup")
local beautiful = require("beautiful")
local naughty = require("naughty")
local decorations = require("ui.decorations")
-- local playerctl_daemon = require("signal.playerctl")
local helpers = require("helpers")
local apps = require("configuration.apps")

--- Make key easier to call
--- ~~~~~~~~~~~~~~~~~~~~~~~
mod = "Mod4"
alt = "Mod1"
ctrl = "Control"
shift = "Shift"

--- The next 2 lines will show shortcuts for tmux and vim
local hotkeys_popup = require("awful.hotkeys_popup")
require("awful.hotkeys_popup.keys")

--- Global key bindings
--- ~~~~~~~~~~~~~~~~~~~
awful.keyboard.append_global_keybindings({

	--- App
	--- ~~~
	-- Terminal
	awful.key({ mod }, "Return", function()
		awful.spawn(apps.default.terminal)
	end, { description = "open terminal", group = "app" }),

	--- App launcher
	awful.key({ mod }, "r", function()
		awful.spawn.with_shell(apps.default.app_launcher)
	end, { description = "open app launcher", group = "app" }),

	--- File manager
	awful.key({ mod }, "f", function()
		awful.spawn(apps.default.file_manager)
	end, { description = "open file manager", group = "app" }),

	--- Shortcuts to open apps
	awful.key({ mod }, "w", function()
		awful.spawn(apps.default.web_browser)
	end, { description = "open web browser", group = "app" }),

	awful.key({ mod }, "t", function()
		awful.spawn("telegram-desktop")
	end, { description = "open telegram", group = "app" }),

	awful.key({ mod }, "o", function()
		awful.spawn("obsidian")
	end, { description = "open obsidian", group = "app" }),

	awful.key({ mod }, "a", function()
		awful.spawn("anki")
	end, { description = "open anki", group = "app" }),

	--- Shortcuts to move mouse
	awful.key({ mod, shift, alt, ctrl }, "i", function()
		awful.spawn("xdotool mousemove_relative 480 0")
	end, { description = "mouse right", group = "app" }),

	awful.key({ mod, shift, alt, ctrl }, "e", function()
		awful.spawn("xdotool mousemove_relative -- 0 -360")
	end, { description = "mouse up", group = "app" }),

	awful.key({ mod, shift, alt, ctrl }, "n", function()
		awful.spawn("xdotool mousemove_relative 0 360")
	end, { description = "mouse down", group = "app" }),

	awful.key({ mod, shift, alt, ctrl }, "m", function()
		awful.spawn("xdotool mousemove_relative -- -480 0")
	end, { description = "mouse left", group = "app" }),

  ---- Shortcuts to move mouse (less)
	awful.key({ shift, alt, ctrl }, "i", function()
		awful.spawn("xdotool mousemove_relative 240 0")
	end, { description = "mouse right less", group = "app" }),

	awful.key({ shift, alt, ctrl }, "e", function()
		awful.spawn("xdotool mousemove_relative -- 0 -180")
	end, { description = "mouse up less", group = "app" }),

	awful.key({ shift, alt, ctrl }, "n", function()
		awful.spawn("xdotool mousemove_relative 0 180")
	end, { description = "mouse down less", group = "app" }),

	awful.key({ shift, alt, ctrl }, "m", function()
		awful.spawn("xdotool mousemove_relative -- -240 0")
	end, { description = "mouse left less", group = "app" }),

	--- Shortcuts to change display settings
	awful.key({ mod, shift, alt, ctrl }, "Escape", function()
		awful.spawn('xrandr --output HDMI-1 --mode 1920x1080 --output eDP-1 --off')
	end, { description = "monitor only", group = "screen" }),

	awful.key({ mod, shift, alt, ctrl }, "Tab", function()
		awful.spawn("xrandr --output HDMI-1 --off --output eDP-1 --mode 1920x1080")
	end, { description = "laptop only", group = "screen" }),

	awful.key({ shift, alt, ctrl }, "Escape", function()
		awful.spawn("xrandr --output HDMI-1 --mode 1920x1080 --above eDP-1 --output eDP-1 --mode 1920x1080")
	end, { description = "monitor above laptop", group = "screen" }),

	--- WM
	--- ~~
	--- Restart awesome
	awful.key({ mod, ctrl }, "r", awesome.restart, { description = "reload awesome", group = "WM" }),

	--- Show help
	awful.key({ mod }, "/", hotkeys_popup.show_help, { description = "show Help", group = "WM" }),

	--- Client
	--- ~~~~~~
	--- Focus client by direction
	awful.key({ mod }, "k", function()
		awful.client.focus.bydirection("up")
	end, { description = "focus up", group = "client" }),
	awful.key({ mod }, "j", function()
		awful.client.focus.bydirection("down")
	end, { description = "focus down", group = "client" }),
	awful.key({ mod }, "h", function()
		awful.client.focus.bydirection("left")
	end, { description = "focus left", group = "client" }),
	awful.key({ mod }, "l", function()
		awful.client.focus.bydirection("right")
	end, { description = "focus right", group = "client" }),

	awful.key({ mod }, "Up", function()
		awful.client.focus.bydirection("up")
	end, { description = "focus up", group = "client" }),
	awful.key({ mod }, "Down", function()
		awful.client.focus.bydirection("down")
	end, { description = "focus down", group = "client" }),
	awful.key({ mod }, "Left", function()
		awful.client.focus.bydirection("left")
	end, { description = "focus left", group = "client" }),
	awful.key({ mod }, "Right", function()
		awful.client.focus.bydirection("right")
	end, { description = "focus right", group = "client" }),

	--- Hotkeys
	--- ~~~~~~~
	--- Brightness Control
	awful.key({}, "XF86MonBrightnessUp", function()
		awful.spawn("brightnessctl set 5%+ -q", false)
		awesome.emit_signal("widget::brightness")
		awesome.emit_signal("module::brightness_osd:show", true)
	end),
	awful.key({}, "XF86MonBrightnessDown", function()
		awful.spawn("brightnessctl set 5%- -q", false)
		awesome.emit_signal("widget::brightness")
		awesome.emit_signal("module::brightness_osd:show", true)
	end),

	--- Volume control
	awful.key({}, "XF86AudioRaiseVolume", function()
		awful.spawn("amixer sset Master 5%+", false)
		awesome.emit_signal("widget::volume")
		awesome.emit_signal("module::volume_osd:show", true)
	end),
	awful.key({}, "XF86AudioLowerVolume", function()
		awful.spawn("amixer sset Master 5%-", false)
		awesome.emit_signal("widget::volume")
		awesome.emit_signal("module::volume_osd:show", true)
	end),
	awful.key({}, "XF86AudioMute", function()
		awful.spawn("amixer sset Master toggle", false)
	end),

	--- Music
	-- awful.key({}, "XF86AudioPlay", function()
	-- 	playerctl_daemon:play_pause()
	-- end, { description = "play pause music", group = "hotkeys" }),

	--- Screenshots
	awful.key({}, "Print", function()
		awful.spawn.with_shell("flameshot gui --clipboard --accept-on-select")
	end, { description = "take a screenshot", group = "hotkeys" }),

	--- Exit screen
	awful.key({ mod, shift }, "Escape", function()
		awesome.emit_signal("module::exit_screen:show")
	end, { description = "exit screen", group = "hotkeys" }),
})

--- Client key bindings
--- ~~~~~~~~~~~~~~~~~~~
client.connect_signal("request::default_keybindings", function()
	awful.keyboard.append_client_keybindings({
		-- Move or swap by direction
		awful.key({ mod, shift }, "k", function(c)
			helpers.client.move_client(c, "up")
		end, { description = "swap client up", group = "client" }),
		awful.key({ mod, shift }, "j", function(c)
			helpers.client.move_client(c, "down")
		end, { description = "swap client down", group = "client" }),
		awful.key({ mod, shift }, "h", function(c)
			helpers.client.move_client(c, "left")
		end, { description = "swap client left", group = "client" }),
		awful.key({ mod, shift }, "l", function(c)
			helpers.client.move_client(c, "right")
		end, { description = "swap client right", group = "client" }),

		awful.key({ mod, shift }, "Up", function(c)
			helpers.client.move_client(c, "up")
		end, { description = "swap client up", group = "client" }),
		awful.key({ mod, shift }, "Down", function(c)
			helpers.client.move_client(c, "down")
		end, { description = "swap client down", group = "client" }),
		awful.key({ mod, shift }, "Left", function(c)
			helpers.client.move_client(c, "left")
		end, { description = "swap client left", group = "client" }),
		awful.key({ mod, shift }, "Right", function(c)
			helpers.client.move_client(c, "right")
		end, { description = "swap client right", group = "client" }),

		--- Toggle titlebars (for all visible clients in selected tag)
		awful.key({ mod, shift, ctrl }, "t", function(c)
			local clients = awful.screen.focused().clients
			for _, c in pairs(clients) do
				decorations.cycle(c)
			end
		end, { description = "toggle titlebar", group = "client" }),

		--- Toggle fullscreen
		awful.key({ mod }, "m", function()
		     client.focus.fullscreen = not client.focus.fullscreen
		     client.focus:raise()
		end, { description = "toggle fullscreen", group = "layout" }),

		--- Toggle tiling for current window (if it doesn't auto tile)
		awful.key({ mod }, "d", function()
			local c = client.focus
			if c then
				if awful.layout.get(c) == awful.layout.suit.tile then
					awful.layout.set(awful.layout.suit.floating, c)
				else
					awful.layout.set(awful.layout.suit.tile, c)
				end
			end
		end, {description = "toggle tiling", group = "layout"}),

		--- Maximize windows
		-- awful.key({ mod }, "m", function(c)
		-- 	c.maximized = not c.maximized
		-- 	c:raise()
		-- end, { description = "toggle maximize", group = "client" }),
		
		--- Close window
		awful.key({ mod }, "Escape", function()
			client.focus:kill()
		end, { description = "close window", group = "app" }),

		--- Window switcher
		awful.key({ alt }, "Tab", function()
			awesome.emit_signal("window_switcher::turn_on")
		end, { description = "turn on window switcher", group = "app" }),

		-- awful.key({ ctrl, alt }, "Down", function()
		-- 	client.focus:move_to_screen()
		-- end, { description = "move window to next screen", group = "screen" }),
		
		-- Move client to other screen
		awful.key({ mod, shift }, "Tab", function(c)
			c:move_to_screen()
		end, { description = "move client to other screen", group = "screen" }),

	})
end)

--- Layout
--- ~~~~~~
awful.keyboard.append_global_keybindings({

	--- Set floating layout
	awful.key({ mod, shift }, "f", function()
		awful.layout.set(awful.layout.suit.floating)
	end, { description = "set floating layout", group = "layout" }),

	--- Set maximized layout
	awful.key({ mod, shift }, "m", function()
		awful.layout.set(awful.layout.suit.max)
	end, { description = "set maximized layout", group = "layout" }),

	--- Set dwindle layout
	awful.key({ mod, shift }, "d", function()
		awful.layout.set(awful.layout.suit.spiral.dwindle)
	end, { description = "set dwindle layout", group = "layout" }),

})

--- Move through workspaces
--- ~~~~~~~~~~~~~~~~~~~~~~~
awful.keyboard.append_global_keybindings({
	-- awful.key({ mod, alt }, "Left", awful.tag.viewprev, { description = "view previous", group = "tags" }),
	-- awful.key({ mod, alt }, "h", awful.tag.viewprev, { description = "view previous", group = "tags" }),
	-- awful.key({ mod, alt }, "Right", awful.tag.viewnext, { description = "view next", group = "tags" }),
	-- awful.key({ mod, alt }, "l", awful.tag.viewnext, { description = "view next", group = "tags" }),
	awful.key({
		modifiers = { mod },
		keygroup = "numrow",
		description = "view tag",
		group = "tags",
		on_press = function(index)
			local screen = awful.screen.focused()
			local tag = screen.tags[index]
			if tag then
				tag:view_only()
			end
		end,
	}),
	awful.key({
		modifiers = { mod, ctrl },
		keygroup = "numrow",
		description = "toggle tag",
		group = "tags",
		on_press = function(index)
			local screen = awful.screen.focused()
			local tag = screen.tags[index]
			if tag then
				awful.tag.viewtoggle(tag)
			end
		end,
	}),
	awful.key({
		modifiers = { mod, shift },
		keygroup = "numrow",
		description = "move focused client to tag",
		group = "tags",
		on_press = function(index)
			if client.focus then
				local tag = client.focus.screen.tags[index]
				if tag then
					client.focus:move_to_tag(tag)
				end
			end
		end,
	}),
})

-- Screen
-----------
awful.keyboard.append_global_keybindings({
-- No need for these (single screen setup)
	awful.key({ mod }, "Tab", function () awful.screen.focus_relative( 1) end, {description = "focus the next screen", group = "screen"}),
	awful.key({ mod, ctrl }, "k", function () awful.screen.focus_relative(-1) end, {description = "focus the previous screen", group = "screen"}),
})

--- Mouse bindings on desktop
--- ~~~~~~~~~~~~~~~~~~~~~~~~~

awful.mouse.append_global_mousebindings({
	
	--- Left click
	awful.button({}, 1, function()
		naughty.destroy_all_notifications()
	end),

})

--- Mouse buttons on the client
--- ~~~~~~~~~~~~~~~~~~~~~~~~~~~
client.connect_signal("request::default_mousebindings", function()
	awful.mouse.append_client_mousebindings({
		awful.button({}, 1, function(c)
			c:activate({ context = "mouse_click" })
		end),
		awful.button({ mod, alt }, 1, function(c)
			c:activate({ context = "mouse_click", action = "mouse_move" })
		end),
		awful.button({ mod }, 3, function(c)
			c:activate({ context = "mouse_click", action = "mouse_resize" })
		end),
	})
end)
