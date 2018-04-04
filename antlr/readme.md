# 1) after the environment setup:
      delete all files except experi.g4, sample.txt & .zip;
# 2) open the terminal or windows powershell(shift+right click);
      antlr4 experi.g4
      javac experi*.java
      grun experi start sample.txt
      grun experi start sample.txt -gui
