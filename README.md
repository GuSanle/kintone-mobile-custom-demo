# kintone-mobile-custom
This is a kintone mobile customize demo. It uses Vite as the development build tool.
kintone vite plugin : [vite-plugin-kintone-dev](https://github.com/GuSanle/vite-plugin-kintone-dev)   
npm: npm i -D vite-plugin-kintone-dev    
This project use : vite4 + vue3  + vant4 + typescript    

## .env setting
```
VITE_APP_ID=xx
```   
## Import the template    
1. Import the kintone-template(Goods list.zip) to your kintone.    
2. Add some demo records   

## Note
If you encounter a TS error with the @kintone/rest-api-client@4.1.0 version, please modify    node_modules/@vue/tsconfig/tsconfig.json.    
```json
// modify "moduleResolution": "bundler" => "node"
"moduleResolution": "node"
```   

## Project Setup

```sh
npm install
```


### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
