# Project Setup Guide

## Prerequisites

### System Requirements

- Operating System: macOS, Linux, or Windows (Windows Subsystem for Linux recommended)
- Minimum RAM: 8GB (16GB recommended)
- Disk Space: At least 10GB free

### Required Tools

1. **Node Version Manager (NVM) 1.2.2** (for managing node and npm)
2. **Node.js v22.14.0 or latest**
3. **PostgreSQL**
4. **Git**

## Initial Setup

### 1. Install NVM (Node Version Manager)

#### Windows

Download and install NVM for Windows from: <https://github.com/coreybutler/nvm-windows/releases>

### 2. Install Node.js

```bash
# Install the project's Node.js version
nvm install 22.14.0
nvm use 22.14.0

# Verify installation
node --version
npm --version
```

### 3. Install PostgreSQL

1. Download installer from: <https://www.postgresql.org/download/windows/>
2. Run the installer
3. Set up postgres user password during installation

### 4. Create PostgreSQL Database Using pgAdmin

1. Open pgAdmin
    - Launch pgAdmin and log in.
2. Connect to PostgreSQL Server
    - In the left panel, expand Servers > PostgreSQL (or your custom server name).
    - If prompted, enter your PostgreSQL password.
3. Create a New Database
    - Right-click on Databases > Click Create > Database.
    - In the General tab:
        - Database name: ```sjsfi-sis```
    - In the Owner dropdown, select postgres or your preferred user.
    - Click Save.

### 5. Clone the Repository

```bash
git clone https://github.com/dnsxmrs/sjsfi-sis
cd sjsfi-sis
```

### 6. Install Project Dependencies

```bash
npm install
```

### 7. Environment Configuration

1. Copy the example environment file:

```bash
cp .env.example .env
```

2. Edit `.env` file with your specific configurations:

```
DATABASE_URL="postgresql://postgres:[yuorPassword]@localhost:5432/sjsfi-sis?schema=public"
# Add other necessary environment variables
```

### 8. Database Migrations

```bash
# Run database migrations
npm run migrate
```

### 9. Seed Initial Data (Optional)

```bash
# If you have seed scripts
npm run seed
```

### 10. Start the Development Server

```bash
npm run dev
```

## Common Troubleshooting

### NVM Issues

- Restart terminal after NVM installation
- Ensure NVM is properly initialized in your shell configuration

### PostgreSQL Connection Problems

- Verify PostgreSQL is running
- Check database credentials in `.env`
- Ensure the specified user has correct permissions

### Dependency Installation Failures

- Ensure you're using the correct Node.js version
- Clear npm cache: `npm cache clean --force`
- Delete `node_modules` and `package-lock.json`, then run `npm install`

## Project Scripts

- `npm run dev`: Start development server
- `npm test`: Run test suite
- `npm run build`: Create production build
- `npm run migrate`: Run database migrations
- `npm run seed`: Seed database with initial data

## Contributing

1. Create a new branch: `git checkout -b feature/your-feature-name`
2. Make your changes
3. Run tests: `npm test`
4. Commit with a descriptive message
5. Push to your branch
6. Create a Pull Request

## License

[Specify your project's license]

## Contact

[Project maintainer contact information]

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
