const activeWindows = require('electron-active-window');
const apps = require('./apps.json');
const DiscordRPC = require('discord-rpc');
const { clientId } = require('./config.json');
const rpc = new DiscordRPC.Client({ transport: 'ipc' });

const startTimestamp = new Date();

rpc.on('ready', () => {
	rpc.setActivity({
		details: 'Launching RPC',
		state: 'Please hold :)',
		largeImageKey: 'discord',
		largeImageText: 'Discord - icodeinassembly.xyz',
	});


	setInterval(() => {
		activeWindows().getActiveWindow().then((v)=>{
		/* Expected output of v
        {
            os: 'linux',
            windowClass: 'code',
            windowName: 'index.js - DiscordWindowRPC - Visual Studio Code',
            windowDesktop: '0',
            windowType: '347',
            windowPid: '4011',
            idleTime: '0'
        }
        */

			console.log(v);

			for (let i = 0; i < apps.appinfo.length ;i++) {
				if(apps.appinfo[i].name === v.windowClass) {

					const app = apps.appinfo[i];

					rpc.setActivity({
						details: app.details,
						state: app.state,
						startTimestamp,
						largeImageKey: app.largekey,
						largeImageText: app.largekeytext,
					});

					console.log('Updated RPC');

				}
			}

		});
	}, 15e3);
});

rpc.login({ clientId }).catch(console.error);