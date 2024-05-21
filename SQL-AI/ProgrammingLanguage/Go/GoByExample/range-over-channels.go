package main

import "fmt"

func main() {
    queue := make(chan string, 2)
    queue <- "one"
    queue <- "tow"
    // possible to close a non-empty channel
    // but still have the remaining values be received
    close(queue)

    for elem := range queue {
        fmt.Println(elem)
    }
}
