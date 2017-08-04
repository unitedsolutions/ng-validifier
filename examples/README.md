# Angular Project Starter

[angular-cli](https://cli.angular.io/) is a convenient utility that can be 
used to create, augment, and build angular projects.  One downside of the tool 
is its default usage of [ahead-of-time (AoT) compilation](https://angular.io/guide/aot-compiler).
For AoT to work, symbols must be resolvable statically.  Some programming use 
cases require dynamic symbol resolution.  When the latter are part of the code 
that is built with `angular-cli`, the following error is likely to to be evoked:

```
Error encountered resolving symbol values statically. Reference to a non-exported 
class SomeModule. Consider exporting the class (position 13:1 in the original .ts 
file).
```

There are recommendations to run `angular-cli` with flags to disable AoT.  At 
the time of this writing, the commands such as `ng build --prod --no-aot` and 
`ng build --prod --aot=false` do not cancel AoT in `angular-cli` version 1.2.

This repository was created to provide an alternative angular project starter
that builds an application using Webpack configured for Just-in-Time (JIT) 
compliation.  The starter was synthesized from `angular-cli`'s ejected
(`ng eject`) configuration and the sample provided in this 
[Webpack documentation](https://angular.io/guide/webpack).

The starter's directory structure mimics the layout built by `angular-cli` and 
the latter may still be used to generate modules, components, etc.  For instance,
running a command `ng g component main/some-component` would still work.  To
build a project, use, modify, or add commands under `scripts` within 
`package.json`.
