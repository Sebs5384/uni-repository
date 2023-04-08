#include <iostream>
#include <cstdlib>
#include <ctime>
#include <vector>

using namespace std;

int main() {

    int rangoMinimo, rangoMaximo, intentosMaximos, numeroAleatorio, adivinanza, i, intentosRestantes;
    vector<int> numerosUsados;

    cout << "Porfavor introduzca un rango minimo para el juego: " << endl;
    cin >> rangoMinimo;
    cout << "Ahora introduzca un rango maximo para el juego: " << endl;
    cin >> rangoMaximo;
    cout << "Cuantos intentos deseas tener en esta partida? " << endl;
    cin >> intentosMaximos;

    if (rangoMinimo > rangoMaximo) {
        int $rangoMaximo = rangoMinimo;
        rangoMinimo = rangoMaximo;
        rangoMaximo = $rangoMaximo;
    }

    srand(time(NULL));
    numeroAleatorio = rand() % (rangoMaximo - rangoMinimo + 1) + rangoMinimo;

    for (i = 0; i < intentosMaximos; i++) {

        intentosRestantes = (intentosMaximos - (i + 1));

        cout << "Podes adivinar el numero aleatorio entre tus inputs? " << rangoMinimo << " y " << rangoMaximo << endl;
        cin >> adivinanza;

        if (adivinanza == numeroAleatorio) {
            cout << "Adivinazte! el numero aleatorio era: " << numeroAleatorio << endl;
            break;
        }
        else if (adivinanza < numeroAleatorio) {
            cout << "Tu adivinanza es de menor valor a tu numero aleatorio, intenta de nuevo !" << endl;
            cout << "Te quedan " << intentosRestantes << " intentos" << endl;
            numerosUsados.push_back(adivinanza);
        }
        else if (adivinanza > numeroAleatorio) {
            cout << "Tu adivinanza es de mayor valor a tu numero aleatorio, intenta de nuevo !" << endl;
            cout << "Te quedan " << intentosRestantes << " intentos" << endl;
            numerosUsados.push_back(adivinanza);
        }



    }

    if (i == intentosMaximos) {
        cout << "Se acabaron tus intentos, perdiste !" << endl;
    }

    return 0;
}