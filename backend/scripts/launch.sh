#!/bin/sh

npx prisma db pull
npx prisma generate
npx nest build
npm run start:prod
