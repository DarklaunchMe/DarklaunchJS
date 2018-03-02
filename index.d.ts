declare module Darklaunch {
    function bind(uuid: string): void
    function isEnabled(flag: string): boolean
    function log(message: string): void
}

export = Darklaunch;