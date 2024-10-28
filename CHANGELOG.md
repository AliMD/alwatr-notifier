# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.0.1](https://github.com/Alwatr/notifier/compare/v2.0.0...v2.0.1) (2024-10-28)

### Bug Fixes

* api version ([4037d17](https://github.com/Alwatr/notifier/commit/4037d170c45ed623469c97b028c8929347552b4a)) by @AliMD

### Code Refactoring

* rename api folder ([951731a](https://github.com/Alwatr/notifier/commit/951731a6dc61a7fbf2ef55f8ad71ef042c7f54e4)) by @AliMD

## [2.0.0](https://github.com/Alwatr/notifier/compare/v1.0.0...v2.0.0) (2024-10-28)

### Features

* add `.github` configs based on `weaver-starter-kit` ([296e169](https://github.com/Alwatr/notifier/commit/296e169fa1544b38b7e1f69fc9a74baf5b0591e7)) by @mohammadhonarvar
* add `deploy` directory ([92e87ee](https://github.com/Alwatr/notifier/commit/92e87eed878f0ee2faf13db511b2d2bfdc41b10a)) by @mohammadhonarvar
* add `telegram-message-sender` package ([f6d8e3e](https://github.com/Alwatr/notifier/commit/f6d8e3e5c881654815337d389be2f31a4c95f34c)) by @mohammadhonarvar
* add a `demo.http` ([dc62296](https://github.com/Alwatr/notifier/commit/dc62296b6533f8cc18a1cdd668cef1ef2b594762)) by @mohammadhonarvar
* getAuthBearer ([836ac0c](https://github.com/Alwatr/notifier/commit/836ac0cded9995689e7703927eb230faeb6c4830)) by @AliMD
* **notifier-api:** add a new route to create a category ([dc91839](https://github.com/Alwatr/notifier/commit/dc91839abf735c87f0cc07b891df6261669fd0d2)) by @mohammadhonarvar
* **notifier-api:** Add parseBodyAsJson handler ([2cf2b13](https://github.com/Alwatr/notifier/commit/2cf2b13a6570879b50ad1007a87c14f0c8357edb)) by @AliMD
* **notifier-api:** start the bot & handle errors ([3f24b61](https://github.com/Alwatr/notifier/commit/3f24b61a079dd3dbfce79186f33987c6a4e4229e)) by @mohammadhonarvar
* **notifier-api:** use `AlwatrHashGenerator` ([0cbdca7](https://github.com/Alwatr/notifier/commit/0cbdca76cd7e3eaa1d1b5e38dcfd4c7c31babd16)) by @mohammadhonarvar
* **notifier-api:** use `hashGenerator` & save data ([572fe39](https://github.com/Alwatr/notifier/commit/572fe39d33a9c7ec0a47d00618fb2a6f6c9a9b43)) by @mohammadhonarvar
* **notify:** new notify package ([42cb4b6](https://github.com/Alwatr/notifier/commit/42cb4b6e0374efd4c0f5b56dd01b1f06db805c87)) by @AliMD
* requireAccessToken handler ([6b0961b](https://github.com/Alwatr/notifier/commit/6b0961b91e0a2f0238b3c1346e9406af93abef34)) by @AliMD
* **telegram:** add `cryptoFactory` ([dc0ddd1](https://github.com/Alwatr/notifier/commit/dc0ddd10efd1f622c756bc002c7ef4aba6dbd395)) by @mohammadhonarvar
* **telegram:** add `Dockerfile` ([4ae0796](https://github.com/Alwatr/notifier/commit/4ae079661856936b8c6a04dc441290755b79de1f)) by @mohammadhonarvar
* **telegram:** add `getUnsubscribeInlineKeyboardData` to reuse ([c2bc35a](https://github.com/Alwatr/notifier/commit/c2bc35a6f1d899b2c3bf3aec896b1cf42a55e6d7)) by @mohammadhonarvar
* **telegram:** add `new_group` command to create a group ([89115a7](https://github.com/Alwatr/notifier/commit/89115a7c22d9f42490f20a06de2e0e53d13db934)) by @mohammadhonarvar
* update logger ([c983ffc](https://github.com/Alwatr/notifier/commit/c983ffc1c1eedf700bcc514f32e37adea52f3562)) by @njfamirm
* use `getEnv` to read `env`s ([#253](https://github.com/Alwatr/notifier/issues/253)) ([64c2ce0](https://github.com/Alwatr/notifier/commit/64c2ce0e933bd6dff9fd96367073a639262c4795)) by @mohammadhonarvar

### Bug Fixes

* **.github:** some issues ([5f0fbb2](https://github.com/Alwatr/notifier/commit/5f0fbb249474d0a2e9be59a31b3237d3f8012b1c)) by @mohammadhonarvar
* **api:** package name ([59b313b](https://github.com/Alwatr/notifier/commit/59b313bcec46dfaa2385fbe7265c54f41aa3a111)) by @AliMD
* **config:** add `botAdminChatId` ([a13bc57](https://github.com/Alwatr/notifier/commit/a13bc571fd4c00caa49fdebdf9a6acb8edd10418)) by @mohammadhonarvar
* **deploy:** `env` values ([ad5dff9](https://github.com/Alwatr/notifier/commit/ad5dff9ab3dbd270f406c46c5f3f31a5a9b45dda)) by @mohammadhonarvar
* **notifier-api:** add missing `/` for routes ([91fc2e9](https://github.com/Alwatr/notifier/commit/91fc2e95d354b664d096ea06d113b4b0ae0c9edf)) by @mohammadhonarvar
* review amd fix routes ([f57a0eb](https://github.com/Alwatr/notifier/commit/f57a0eb622308e62329612793ced3f55901b5700)) by @AliMD
* **telegram-message-sender:** `version` & make it public ([207c598](https://github.com/Alwatr/notifier/commit/207c598fc046fed43c8db90f85f1131a84fca616)) by @mohammadhonarvar
* **telegram-message-sender:** use `accessToken` ([7b43343](https://github.com/Alwatr/notifier/commit/7b43343ca0338c6b5786cf8db00c9fb0f2383a4a)) by @mohammadhonarvar
* **telegram:** add a missing `import` & format ([66d4297](https://github.com/Alwatr/notifier/commit/66d4297414bfa9e36aaaf9e3867f82077905eb56)) by @mohammadhonarvar
* **telegram:** check the access to run the command ([ed723af](https://github.com/Alwatr/notifier/commit/ed723af95a370caf8443965cf22ae56fff4eb8fb)) by @mohammadhonarvar
* **telegram:** read `dropPendingUpdates` from `env` object ([db3380a](https://github.com/Alwatr/notifier/commit/db3380a64820bf40e0fffb9ae99322a6543f103c)) by @mohammadhonarvar
* **telegram:** remove creating a group as default when it doesn't exist ([d72f8a3](https://github.com/Alwatr/notifier/commit/d72f8a34a3890942c7f866b46488ad7577432ad6)) by @mohammadhonarvar
* **telegram:** start `bot` ([f1b1186](https://github.com/Alwatr/notifier/commit/f1b11863665184f1d50bd8d2542fbf8b5d86b105)) by @mohammadhonarvar
* **telegram:** types ([45e4579](https://github.com/Alwatr/notifier/commit/45e45794e3f5960883104efbdd48645b8a7f53d8)) by @mohammadhonarvar
* **telegram:** validate `groupId` ([5311b39](https://github.com/Alwatr/notifier/commit/5311b3966c4050f2faef78ae2139d2aef3d407bc)) by @mohammadhonarvar
* update `scripts` ([e06afbe](https://github.com/Alwatr/notifier/commit/e06afbe50e955b9c743ff930d4bab8baef0e8993)) by @mohammadhonarvar
* **vscode:** vscode sdk ([1150911](https://github.com/Alwatr/notifier/commit/1150911d472dbb7f4c90c1e06aa6d39056b7b4ce)) by @njfamirm

### Code Refactoring

* add the basic structure from `nanolib` ([f0ba631](https://github.com/Alwatr/notifier/commit/f0ba631aece67e1c16847a740efb8e990ec17cd9)) by @mohammadhonarvar
* **config:** cleanup ([a6353d6](https://github.com/Alwatr/notifier/commit/a6353d6ef645f020cbc3e11f64b2ed85e8c19f4a)) by @AliMD
* **db:** review and enhance ([f32868e](https://github.com/Alwatr/notifier/commit/f32868eb5465e7fc651a633be36f9bcd1916b978)) by @AliMD
* **deploay:** add some changes based on `weaver-starter-kit` ([aa7aebc](https://github.com/Alwatr/notifier/commit/aa7aebc828908924b8ce3a5d8249ef286d4c638b)) by @mohammadhonarvar
* **new-category:** rewrite new category route ([f83c301](https://github.com/Alwatr/notifier/commit/f83c301211c97cf8fd3ed0594a84d641798cfcb2)) by @AliMD
* **notifier-api:** add some pre-handlers & complete the process of `notify` route & cleanup codes ([458be1d](https://github.com/Alwatr/notifier/commit/458be1db74c3ae612833e520204feac92482c222)) by @mohammadhonarvar
* **notifier-api:** copy path in `Dockerfile` ([0272483](https://github.com/Alwatr/notifier/commit/0272483af9e5adc165f4a7c95639c8adedcbc468)) by @mohammadhonarvar
* **notifier-api:** import `pre-handlers` from `nanotorn` ([98f1cc6](https://github.com/Alwatr/notifier/commit/98f1cc6471791f96fe6b40d94f9c97a80c3a0990)) by @mohammadhonarvar
* **notifier-api:** Refactor bot.ts and main.ts ([f09d1fd](https://github.com/Alwatr/notifier/commit/f09d1fd78dfb9d38f55beef297ca48e521a78ae4)) by @AliMD
* **notifier-api:** Remove unused hashGenerator ([9c270f7](https://github.com/Alwatr/notifier/commit/9c270f7e7f8fd6629a52203c830d5c13154c6f7b)) by @AliMD
* **notifier-api:** rename all `group`s to `category` ([56901b0](https://github.com/Alwatr/notifier/commit/56901b0e79f7e1ec0cb937e7c3f53e7c6376553f)) by @mohammadhonarvar
* **notifier-api:** rename all `group`s to `category` ([2db1baf](https://github.com/Alwatr/notifier/commit/2db1baf888b390496c29049e6c5c137d3042302f)) by @mohammadhonarvar
* **notifier-api:** rename nitrobase ([71d459a](https://github.com/Alwatr/notifier/commit/71d459a6b8b2a08ff26936b7bed177e64314b115)) by @AliMD
* **notifier-api:** Rename package to "telegram-notifier" ([5be8cfe](https://github.com/Alwatr/notifier/commit/5be8cfe61ea9d50664db6483c6d292a3af54dec6)) by @AliMD
* **notifier-api:** rewrite notify route ([cead5b1](https://github.com/Alwatr/notifier/commit/cead5b121c7715bca14075407651c460ace0e46a)) by @AliMD
* **notifier-api:** Update bot start method and error handling ([3d1f585](https://github.com/Alwatr/notifier/commit/3d1f585322fa834d8aea7c20132aa8c2a636f46c)) by @AliMD
* **notifier-api:** Update config.ts to use telegramBot instead of bot ([ac3eaf9](https://github.com/Alwatr/notifier/commit/ac3eaf9e2243e3cdc1515e6fda1eb22647ce8f3b)) by @AliMD
* **notifier-api:** Update escapeMessage function to use regex for character escaping ([254fa35](https://github.com/Alwatr/notifier/commit/254fa3599a50a2b8df015d217600d5a353da2035)) by @AliMD
* **notifier-api:** Update home route to return JSON response ([7ec4e0e](https://github.com/Alwatr/notifier/commit/7ec4e0e274fd45741793181d939b9817354b17f2)) by @AliMD
* **notifier-api:** Update i18n message function and resource keys ([c02db00](https://github.com/Alwatr/notifier/commit/c02db00df9f472b7a4a0c03be49b2b1115f48f78)) by @AliMD
* **notifier-api:** Update import path for config in server.ts ([abe1171](https://github.com/Alwatr/notifier/commit/abe117126574ae6e33f40c1fc0aa77ea7537f4a7)) by @AliMD
* **notifier-api:** Update import path for nitrobase in nitrobase.ts ([5e3ef41](https://github.com/Alwatr/notifier/commit/5e3ef410a4300c778cd1f810ecd95240b67ca8a0)) by @AliMD
* **notifier-api:** Update notify-validation handler to validate category and message inputs ([64be082](https://github.com/Alwatr/notifier/commit/64be0820cadcdba26f372974898708d76fb2cc1b)) by @AliMD
* **notifier-api:** Update notifyRoute to use notifyValidation and notifyTelegram ([09a4a6d](https://github.com/Alwatr/notifier/commit/09a4a6dfad4567b0a427f77344784e6ede809a94)) by @AliMD
* **notifier-api:** Update notifyTelegram function to send messages to all members of a category ([f0a6847](https://github.com/Alwatr/notifier/commit/f0a6847299f5305661dc4cc17ab036b2ea1b5864)) by @AliMD
* **notifier-api:** Update parseBodyAsJson handler to use JsonObject type ([baadde0](https://github.com/Alwatr/notifier/commit/baadde00ebb41038f0a650c664a1907fc40ba4a0)) by @AliMD
* **notifier-api:** update requireAccessToken function ([9a1c02c](https://github.com/Alwatr/notifier/commit/9a1c02caa6c7b6cd55b9b16942734069e91a8eb9)) by @AliMD
* **notifier-api:** Update start-command to add user to category members list ([98db565](https://github.com/Alwatr/notifier/commit/98db565650d0b8e3714ebabf8358de9b2637bd47)) by @AliMD
* **notifier-api:** Update type definitions for Category, Member, and NotifyOption ([a1b5d35](https://github.com/Alwatr/notifier/commit/a1b5d35c438496c0c2ab202431c1c2048a85d62b)) by @AliMD
* **notify:** review and enhance ([adb18f5](https://github.com/Alwatr/notifier/commit/adb18f55a5c6d7dd0525a80762cc448212ad10b5)) by @AliMD
* **packages:** rename `telegram` to `notifier-api` ([a01c9a1](https://github.com/Alwatr/notifier/commit/a01c9a1ff66d2ed476aaab8972aaa33f028a6829)) by @mohammadhonarvar
* rename files ([da6b6e9](https://github.com/Alwatr/notifier/commit/da6b6e9c86a2b85872b6683508f366633aa1084b)) by @AliMD
* rename files and cleaup ([93bb419](https://github.com/Alwatr/notifier/commit/93bb4192a06ffeb13cbd0c92f08f219cffd257a1)) by @AliMD
* **start-command:** review and enhance ([2a3cbd0](https://github.com/Alwatr/notifier/commit/2a3cbd0c7b402f900ab4e1e91bd5623a6059f1c3)) by @AliMD
* **telegram-message-sender:** add some types & refactor configs ([8cae2e4](https://github.com/Alwatr/notifier/commit/8cae2e484c8a6b8eaebd00f134243ceb71c8b32a)) by @mohammadhonarvar
* **telegram-message-sender:** rename `send` to `notify` ([f492d2d](https://github.com/Alwatr/notifier/commit/f492d2d00b967409aa1e3ce8e9a3eff8f809a891)) by @mohammadhonarvar
* **telegram:** fix errors & complete the structure ([6e95609](https://github.com/Alwatr/notifier/commit/6e956096cd6a8ef4d804d044a254a56329805b27)) by @mohammadhonarvar
* **telegram:** keys of `message` & fix all its usages ([087e98a](https://github.com/Alwatr/notifier/commit/087e98a286aab3b675e2506441b539ea9ec4b208)) by @mohammadhonarvar
* **telegram:** sending message & the process of `start` command ([e748d94](https://github.com/Alwatr/notifier/commit/e748d94c0f91057f3aecb1baf5508b9a8240ace2)) by @mohammadhonarvar
* **telegram:** types ([4ae9d53](https://github.com/Alwatr/notifier/commit/4ae9d532db54e0d7cd4f0ac2c807efd8f16dc410)) by @mohammadhonarvar
* **vscode:** Update .vscode/settings.json ([42a2f59](https://github.com/Alwatr/notifier/commit/42a2f59aa6d6e6fae0bf4537168f5b6eed12dd29)) by @AliMD

### Miscellaneous Chores

* **.vscode:** update ([baa21f9](https://github.com/Alwatr/notifier/commit/baa21f9aa0c069ddc9516351dc6d6626f991d437)) by @mohammadhonarvar
* **ci:** lockfile-only dependabot ([3ade5a7](https://github.com/Alwatr/notifier/commit/3ade5a7456cfd5a6048a1744313b27ea0439da9f)) by @njfamirm
* cleanup ([c59925d](https://github.com/Alwatr/notifier/commit/c59925d05f00d7c51c3c840a0f580d41c7ba232f)) by @AliMD
* cleanup ([e5af06e](https://github.com/Alwatr/notifier/commit/e5af06e73a335b06fb1d8d9de9493486298b2358)) by @AliMD
* cleanup ([665aa21](https://github.com/Alwatr/notifier/commit/665aa218b0d23e2df373e1bb0e7dfd37766554e7)) by @njfamirm
* **command:** upd ([b709ea9](https://github.com/Alwatr/notifier/commit/b709ea973997be0f7c1951fc9c0ebf4619357305)) by @njfamirm
* **depndabot:** remove lockfile only ([0ca51a1](https://github.com/Alwatr/notifier/commit/0ca51a1860f7d3fa6abbe6193aef4ad856ca13f8)) by @njfamirm
* **deps-dev:** bump the alwatr-dependencies group with 3 updates ([17e81a0](https://github.com/Alwatr/notifier/commit/17e81a06ef12e7276b0c95417d4f1468aa0429f9)) by @dependabot[bot]
* **deps-dev:** bump the development-dependencies group with 13 updates ([542e49b](https://github.com/Alwatr/notifier/commit/542e49b2b52a444bfa2ccc931a0f0d46d3abd177)) by @dependabot[bot]
* **deps:** bump tar from 6.2.0 to 6.2.1 ([c724c75](https://github.com/Alwatr/notifier/commit/c724c7566e7deb2a68546c7ff084902fcec68123)) by @dependabot[bot]
* **deps:** bump the github-actions group with 1 update ([c4d974c](https://github.com/Alwatr/notifier/commit/c4d974c4f01e3cffd64266542fe3ffab16b555c7)) by @dependabot[bot]
* **deps:** bump the github-actions group with 1 update ([511412d](https://github.com/Alwatr/notifier/commit/511412d712d9e0da3ca3d954cc8039be854c2732)) by @dependabot[bot]
* fix review issue ([4043295](https://github.com/Alwatr/notifier/commit/404329533d13ce5fc6720a1e64110373cfd1fc27)) by @njfamirm
* lint ([d3130f7](https://github.com/Alwatr/notifier/commit/d3130f7feca9e127ab426c61fc4fa79c79543f52)) by @njfamirm
* move telegram ([3e352e7](https://github.com/Alwatr/notifier/commit/3e352e73e031fd4488bb510777df629413c25fa7)) by @njfamirm
* **notifier-api:** cleanup ([9aec891](https://github.com/Alwatr/notifier/commit/9aec8917a60368301f927ff4f4ae0b1b555b1cb7)) by @mohammadhonarvar
* **notifier-api:** update `demo.http` ([9a72110](https://github.com/Alwatr/notifier/commit/9a721102f785f2e5f053f713d19528d25065cddf)) by @mohammadhonarvar
* registry url ([5fd7811](https://github.com/Alwatr/notifier/commit/5fd7811a39685d93247be4d2f455c9c716899b8a)) by @njfamirm
* static version in lerna ([fb96f40](https://github.com/Alwatr/notifier/commit/fb96f401453fcf09a144876109a47883dbd8d348)) by @njfamirm
* **telegram-message-sender:** remove extra files ([649faa7](https://github.com/Alwatr/notifier/commit/649faa71d02b38c49a493ced7e66042f8dd34fc4)) by @mohammadhonarvar
* update `lerna` based on `weaver-starter-kit` ([9d5f5b3](https://github.com/Alwatr/notifier/commit/9d5f5b3eff3e4745b1fd041aedfca9531ac99401)) by @mohammadhonarvar
* update base ([092d771](https://github.com/Alwatr/notifier/commit/092d771bd529d18739039d685acb9c78693df0a2)) by @njfamirm
