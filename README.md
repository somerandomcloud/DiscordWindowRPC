# Panel-bot

DiscordWindowRPC is a [Discord](https://discord.com/) RPC client, that can detect which window you are tabbed in, and (if the application is added to the
 [apps.json](apps.json)) will display the app in your Discord RPC

![](https://i.imgur.com/GxoyGLJ.png)

## Donations

To donate to me/this project, dm `ICodeInAssembly#7117`

## Installation

Install [NodeJs](https://nodejs.org/en/download/).

Create a Discord application on the [Discord portal](https://discord.com/developers/applications).

Rename `config.example.json` to `config.json`, and fill in the secrets.

Run `npm i` to install the dependencies.

## Configuration

To add a new app to your [apps.json](apps.json), you need to find the apps id. 

### Linux

To find the app id on linux, you can run `top` (if installed) in your terminal, and in the column `COMMAND`, look for the app you want. Or, if you are on Ubuntu, you can use the built-in System Monitor app and check the `Process Name` column

### Windows

Note: This part might be inaccurate, because I havent tested this on Windows


Open Task Manager (Task Manager can be opened in a number of ways, but the simplest is to select Ctrl+Alt+Delete, and then select **Task Manager**), and head over to the Details tab. Look at the Name column, and look for the app you want


---

Once you have found the desired app name, copy and paste this template, and fill in the blanks:
```json
{
    "name": "YourAppID",
    "state": "SecondLineInRPC",
    "details": "FirstLineInRPC",
    "largekey": "NameOfImageInDiscordApplicationArea",
    "largekeytext": "TextOfImageInDiscordApplicationArea"
},
```

The current `apps.json` should be completely cleared, as it is ready for use on linux only. While leaving the apps there doesnt break the rpc, it could affect performance (but not by much).

## Usage

Run `npm start` to start the rich presence

## Contributing
This README is incomplete. Maybe you can add more text! (Configuration)

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)