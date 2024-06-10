```racket
;; Die ersten drei Zeilen dieser Datei wurden von DrRacket eingefügt. Sie enthalten Metadaten
;; über die Sprachebene dieser Datei in einer Form, die DrRacket verarbeiten kann.
#reader(lib "DMdA-beginner-reader.ss" "deinprogramm")((modname video-6) (read-case-sensitive #f) (teachpacks ((lib "image2.rkt" "teachpack" "deinprogramm"))) (deinprogramm-settings #(#f write repeating-decimal #f #t none explicit #f ((lib "image2.rkt" "teachpack" "deinprogramm")))))
(require racket/math)

; Fläche des Kreises mit Radius radius
(: circle-area (real -> real))
(check-expect (circle-area 1) pi)
(check-expect (circle-area 24.62) 1904.26)

(define circle-area
  (lambda (radius)
    (* pi (* radius radius))))


; Anzahl der PKWs unter n Fahrzeugen, die insgesamt r Räder besitzen
(: parking-lot-cars (natural natural -> natural))
(check-expect (parking-lot-cars 1 4) 1)
(check-expect (parking-lot-cars 2 4) 0)
(define parking-lot-cars
  (lambda (n r)
    (/ (- r (* 2 n))
       2)))


(parking-lot-cars 6 16) ; 2 Autos + 4 Motorräder

; Alter (in Jahren) bis zur Volljährigkeit
(: volljährig natural)
(define volljährig 18)


; Ist das Fahren eines Autos im Alter von a Jahren erlaubt?
(: autofahren-erlaubt? (natural -> boolean))
(define autofahren-erlaubt?
  (lambda (a)
    (>= a volljährig)))

(autofahren-erlaubt? 17)
(autofahren-erlaubt? 18)

```