import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'dev.flakolefluk.pokeapp',
  appPath: 'app',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  },
  cli: {
    packageManager: 'npm'
  }
} as NativeScriptConfig;