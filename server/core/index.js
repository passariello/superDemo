// Register ts-node to handle TypeScript files
try {
  require('ts-node').register(
    {
      transpileOnly: true,
      compilerOptions: {
        module: 'commonjs'
      }
    }
  )
} catch (e) {
  console.error('Failed to load ts-node. Make sure it is installed:', e)
  process.exit(1)
}

// Now we can require TypeScript files
require('./init.ts')
