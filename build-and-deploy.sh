cd frontend
npm ci
npm run build
cp -R build ../public
cd -
git add .

git push heroku