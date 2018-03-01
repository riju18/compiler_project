# You have to node.js installed:
# 1) open terminal or gitbash;
# 2) To use the nearley compiler, you need to additionally install nearley globally:
      $ npm install nearley -g
# 3) To use the nearley parser, you need to install nearley locally: 
       * make any folder;
       * go to that folder;
       * open terminal or gitbash;
       $ npm install nearley --save;
# 4) now you have to make js file:
     in terminal:
     nearley grammar.ne -o grammar.js
# 5) If you want to test input according to your grammar to make sure correct or wrong:
      in terminal:
      nearley-test grammar.js --input 'id+id*id'
 # 6) to see all grammar explanation in html page:
       in terminal:
       nearley-railroad grammar.ne -o grammar.html
# grammar.ne is file name where grammar is written.
# you can change the grammar file name & it's content any time.
# zip files are the nearley examples. just extract & do as above.
# more: https://nearley.js.org/
