declare module Darklaunch {
    function fetchFlags(): void
    function bind(uuid: string): void
    function isEnabled(flag: string): boolean
    function log(message: string): void
}

export = Darklaunch;