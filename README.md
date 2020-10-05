# Caesar Cipher CLI

The CLI application to encrypt/decrypt text via [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher).

## First steps

Clone the repository:

```bash
git clone https://github.com/MachukIvan/caesar-cipher-cli.git
```

## Installation

Use the node package manager to install dependencies:

```bash
npm install
```
Wait the process to finish.

## Available options

Caesar Cipher CLI could accept 4 options (short alias and full name):
1. -s, --shift: a shift for encoding/decoding.
2. -i, --input: an input file path. Could be absoloute or relative. If no input option was provided, then the the text could be entered into the console.
3. -o, --output: an output file path. Could be absoloute or relative. If no output option was provided, then the encoded/decoded result will appear in the console.
4. -a, --action: an action encode/decode. Two values could be provided: "encode" and "decode". If no value was provided, the default behavior is encoding.

## Usage

At first go the root folder:
```bash
cd caesar-cli-app
```

Now you are ready to use the app:
```bash
node caesar-cli -s 4 -i ./input.txt -o ./output.txt -a encode
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
