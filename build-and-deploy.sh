cd frontend
npm ci
npm run build
cp -R build ../public
cd -
git add .
git commit -m "build and deploy"
git push heroku
