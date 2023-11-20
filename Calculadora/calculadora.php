<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --regular-text: #CDCDCD;
        }

        @import url('https://fonts.googleapis.com/css2?family=Victor+Mono:wght@100&display=swap');

        body {
            height: 86vh;
            background-image: linear-gradient(to bottom, RGB(24, 24, 24), RGB(24, 24, 24, .98));
            color: var(--regular-text);
            font-family: 'Victor Mono', monospace;
        }

        h1 {
            font-family: 'Victor Mono', monospace;
            font-size: 2.5rem;
        }

        .ops {
            width: 100%;
            border: 0;
            outline: 0;
            border-radius: 4px;
            box-shadow: 0px 0px 5px 0px rgb(0, 255, 9);
            background-color: RGB(24, 24, 24);
            color: var(--regular-text);
            font-size: 1.5rem;
            padding: .5rem 1rem;
            transition: .3s;
        }

        .ops:focus {
            box-shadow: 0px 0px 10px 1px rgb(0, 255, 9);
        }

        .container{
            width: 100%;
            margin-top: 14vh;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: column wrap;
            gap: 30px;
        }

        form{
            width: clamp(400px, 50%, 700px);
        }

        .result{
            text-align: center;
            width: clamp(250px, 30%, 400px);
            padding: .75rem 1rem;
            border-block: 1px solid white;
            font-size: 1.5rem;
            margin-inline: auto;
        }

        .operation{
            text-align: center;
            width: clamp(250px, 30%, 400px);
            padding-block: .75rem 0;
            border-inline: 1px solid white;
            border-top: 1px solid white;
            font-size: 1.25rem;
            margin-inline: auto;
        }
    </style>
    <title>Calculadora</title>
</head>

<body>
    <div class="container">
        <h1>Calculadora</h1>
        <form action="calculadora.php" method="post">
            <input class="ops" type="text" name="ops" maxlength="50" autofocus autocomplete="off">
        </form>
    </div>

    <br><br><br>

    <?php
    error_reporting(0);
    if ($_POST){    
        $ops = $_POST['ops'];
        //$array = explode('-', $string);

        echo "<div class='operation'>Operação: $ops</div><br>";

        //Numeros negativos?

        $calcs = [];

        $number = '';

        for ($i = 0; $i < strlen($ops); $i++) { // Pega os numeros, os converte, e pega as operações em string

            if (is_numeric($ops[$i]) || $ops[$i] == "." || $ops[$i] == "-" && ($ops[$i-1] == "*" || $ops[$i-1] == "/"))
                $number .= $ops[$i]; 
            else if($ops[$i] == ",")
                $number .= ".";
            else {
                array_push($calcs, floatval($number));

                if ($ops[$i] == "*" && $ops[$i + 1] == "*") {
                    array_push($calcs, "**");
                    $i++;
                } else
                    array_push($calcs, $ops[$i]);

                $number = '';
            }
        }
        array_push($calcs, floatval($number));

        // print_r($calcs);

        $holder = 0;

        for ($i = 1; $i < count($calcs); $i += 2) {

            if ($calcs[$i] == "**") {
                $holder = pow($calcs[$i - 1], $calcs[$i + 1]);
                op_process();
            }

            if ($i != -1 && ($calcs[$i] == "r" || $calcs[$i] == "R")) {
                $holder = pow($calcs[$i - 1], (1 / $calcs[$i + 1]));
                op_process();
            }
        }

        for ($i = 1; $i < count($calcs); $i += 2) { // Procura * e / e os realiza

            if ($calcs[$i] == "*") {
                $holder = $calcs[$i - 1] * $calcs[$i + 1];
                op_process();
            }
            
            if ($i != -1 && $calcs[$i] == "/") {
                $holder = $calcs[$i - 1] / $calcs[$i + 1];
                op_process();
            }
        }

        $result = $calcs[0];

        for ($i = 1; $i < count($calcs); $i += 2) { // faz + e -


            if ($calcs[$i] == "+")
                $result += $calcs[$i + 1];
            if ($calcs[$i] == "-")
                $result -= $calcs[$i + 1];


            if ($i >= count($calcs)) {
                $i = 1;
                //echo "chaos $order";
            }
            //$order++;
        }

        echo "<div class='result'><strong>Resultado:<strong> $result </div><br>";

        // print_r($calcs);


        // array_values() after unset()
    }

    function op_process()
        { // Organiza calcs depois da operação
            global $holder;
            global $i;
            global $calcs;
            $calcs[$i - 1] = $holder;
            unset($calcs[$i]);
            unset($calcs[$i + 1]);
            $calcs = array_values($calcs);
            $i -= 2; //Para verificar a nova operação
        }

    ?>

</body>

</html>