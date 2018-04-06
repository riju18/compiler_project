# 1) after the environment setup:
      delete all files except experi.g4, sample.txt & .zip;
# 2) open the terminal or windows powershell(shift+right click);
      antlr4 experi.g4                     //experi.g4 is the file name;
      javac experi*.java                   //javac is javacompile
      grun experi start sample.txt         //start is the grammar starting point
      grun experi start sample.txt -gui    //sample.txt is where the input is written,-gui is the "graphical user interface" of parse tree
