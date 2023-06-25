
[![Latest version](https://deno.land/badge/freshportsq/version)](https://deno.land/x/freshportsq)

# freshportsq

**freshportsq** is a deno-powered cli freshports.org query tool

find freebsd ports

## usage

to run:

```sh
deno run --allow-net 'https://deno.land/x/freshportsq/cli.ts' <portname>
```

example:

```
deno run --allow-net 'https://deno.land/x/freshportsq/cli.ts' deno
Name                Version    
speech-denoiser-lv2 g20181007_1
denominator         4.7.1      
deno                1.34.3_1 
```

## install

Requires [deno](https://deno.land/manual@v1.33.2/getting_started/installation)

```
deno install -n freshportsq --allow-read --allow-net https://deno.land/x/freshportsq/cli.ts
```

## license

Copyright 2023 **denobytes**.\
See [LICENCE](LICENSE) file to get more infomation.

