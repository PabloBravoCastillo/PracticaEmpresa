<?php

        try{
            $base=new PDO('mysql:host=localhost; dbname=practica_empresa','root','')
            $base->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $base->exec("SET CHARACTER UTF8");

        }catch(exception $e){
            die('error'. $e->getMessage());
            echo "Línea del error" . $e->getLine();
        }



?>