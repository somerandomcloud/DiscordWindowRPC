const apps = require('./apps.json');
const DiscordRPC = require('discord-rpc');
const { clientId } = require('./config.json');
const rpc = new DiscordRPC.Client({ transport: 'ipc' });
const activeWindow = require('active-win');
const find = require('find-process');

const startTimestamp = new Date();

rpc.on('ready', () => {
	rpc.setActivity({
		details: apps.default.details,
		state: apps.default.state,
		largeImageKey: apps.default.largekey,
		largeImageText: apps.default.largekeytext,
	});

	console.log('Starting RPC...');

	setInterval(() => {
		(async () => {
			let window = await activeWindow()
			
			/*
			{
  				platform: 'linux',
  				title: 'index.js - DiscordWindowRPC - Visual Studio Code',
  				id: 130023427,
  				owner: { name: 'Code', processId: 10287, path: '/usr/share/code/code' },
  				bounds: { x: 0, y: 30, width: 1920, height: 1017 },
  				memoryUsage: 154226688
			}
			*/

			find('pid', window.owner.processId).then(
				function (procname) {
					console.log('Checking for all the data')
					console.log(`The currents windows name is: ${procname[0].name}`)
					for (let i = 0; i < apps.appinfo.length ;i++) {
						if(apps.appinfo[i].name === procname[0].name) {
		
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
				},
				function (err) {
					console.log(err.stack || err);
				}
			);
		})();
	}, 15e3);
});

rpc.login({ clientId }).catch(console.error);
