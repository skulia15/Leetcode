This project contains solutions to various coding puzzles, each written as a standalone TypeScript file. Every file in the project represents an independent solution and is written in TypeScript (`.ts`). The TypeScript files are compiled to JavaScript (`.js`) for execution.

## Project Structure

```graphql
graphql
Copy code
.
├── src/
│   ├── AddTwoNumbers.ts
│   ├── FizzBuzz.ts
│   ├── LengthOfLongestSubstring.ts
│   ├── TwoSum.ts
│   └── ... (other puzzle files)
├── dist/                  # Compiled JavaScript files (optional)
├── tsconfig.json          # TypeScript configuration file
└── README.md              # This file

```

## Prerequisites

- **Node.js**: Make sure Node.js is installed. You can check by running:
    
    ```bash
    bash
    Copy code
    node -v
    
    ```
    
- **TypeScript**: Install TypeScript globally if you haven’t already:
    
    ```bash
    bash
    Copy code
    npm install -g typescript
    ```
    

## Setup

Clone this repository and navigate to the project folder.

```bash
bash
Copy code
git clone <repository-url>
cd <project-folder>
```

## Compiling and Running Files

### 1. Compile All TypeScript Files

To compile all `.ts` files in the project directory, use:

```bash
bash
Copy code
tsc
```

This command will compile all TypeScript files based on the configuration in `tsconfig.json`. By default, the compiled JavaScript files will be outputted in the same directory as the source files unless an output directory (`outDir`) is specified in `tsconfig.json`.

### 2. Specify an Output Directory (Optional)

To keep the source and compiled files separate, an output directory (`dist`) has been set up in `tsconfig.json`. If you're using this configuration, after running `tsc`, all compiled JavaScript files will be located in `dist/`.

### 3. Run a Specific File

After compiling, you can run any specific solution file with `node`. For example, to run the `TwoSum` solution:

```bash
bash
Copy code
node dist/TwoSum.js
```

Alternatively, if you don’t specify an output directory, you can run it directly from the root folder:

```bash
bash
Copy code
node TwoSum.js
```

### 4. Compile and Run a Single File

If you only want to compile and run a single TypeScript file without compiling the whole project, you can do:

```bash
tsc TwoSum.ts && node TwoSum.js
```

This will compile `TwoSum.ts` to `TwoSum.js` and immediately run it.

## Using `ts-node` for Quick Execution

If you prefer not to generate `.js` files, you can use [`ts-node`](https://github.com/TypeStrong/ts-node) to run TypeScript files directly:

1. Install `ts-node` globally:
    
    ```bash
    bash
    Copy code
    npm install -g ts-node
    ```
    
2. Run any TypeScript file directly:
    
    ```bash
    bash
    Copy code
    ts-node src/TwoSum.ts
    ```
    

## Notes

- Each `.ts` file is isolated with an `export {}` statement to prevent variables from being shared across files.
- The `dist` folder, if specified in `tsconfig.json`, keeps compiled files separate from the source code for cleaner organization.