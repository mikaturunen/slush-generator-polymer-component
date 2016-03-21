# Slush Polymer-component [![Build Status](https://secure.travis-ci.org/mikaturunen/slush-generator-polymer-component.png?branch=master)](https://travis-ci.org/mikaturunen/slush-generator-polymer-component) [![NPM version](https://badge-me.herokuapp.com/api/npm/slush-polymer-component.png)](http://badges.enytc.com/for/npm/slush-polymer-component)

> Generator for Polymer component with some implied best practices (imd, typescript, es2015)

## Getting Started

Install `slush-polymer-component` globally:

```bash
$ npm install -g slush-polymer-component
```

### Usage

The generator assumes you are storing all your Polymer components in project/components/ directory. Navigate to your project directory and run the generator.

```bash
slush polymer-component
```

Note that the whole package assumes you have Polymer typedefinitions available in your toolchain for compilation, less compilation and jade compilation available. We do not provide any of that.

## Getting To Know Slush

Slush is a tool that uses Gulp for project scaffolding.

Slush does not contain anything "out of the box", except the ability to locate installed slush generators and to run them with liftoff.

To find out more about Slush, check out the [documentation](https://github.com/slushjs/slush).

## Contributing

See the [CONTRIBUTING Guidelines](https://github.com/mikaturunen/slush-polymer-component/blob/master/CONTRIBUTING.md)

## Support
If you have any problem or suggestion please open an issue [here](https://github.com/mikaturunen/slush-polymer-component/issues).

## License

The MIT License

Copyright (c) 2016, Mika Turunen

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
