<h1 align="center">
    <br>
    Algorithm and Data Structures
</h1>

<h4 align="center">

  My implementation of classic algorithm and data structures using the JavaScript language.

</h4>

<p align="center">
  <a href="#goal">Goal</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#algorithms--data-structures">Algorithms & Data Structures</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#concepts">Concepts</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

![App Screenshot](https://res.cloudinary.com/dmct8cfu9/image/upload/c_scale,w_500/v1595204765/memory_1.png)

## Goal

The goal is to learn as much as possible about Algorithm and Data Structures with a hands on approach by creating my own implementation of them by using JavaScript and share what I've learned to help other people who want to learn
them.

By studying the Introduction to Algorithms book (Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein) and building my own implementation of the operations that are responsible for manipulating the data contained in a data structure I was possible for me to better understand their space time implications.

**NOTE**: Check AlgoViewer [here](https://github.com/stevescruz/algorithm_visualizer).

## Algorithms & Data Structures:
### Data Structures
- [ ] Array
  - [ ] Static Array
  - [ ] Dynamic Array
- [ ] Linked List
  - [x] Singly Linked List
  - [] Doubly Linked List
- [ ] Hash Table
- [ ] Stack
- [ ] Queue
- [ ] Heap
- [ ] String
- [ ] Graph
- [ ] Binary Tree

### Algorithms
- [ ] Coming soon...

## Concepts

### Memory

To understand data structures it's necessary to have a basic overview of how memory allocation works to better understand the space time implications of the various operations that are performed by data structures on their underlying data.

![App Screenshot](https://res.cloudinary.com/dmct8cfu9/image/upload/c_scale,w_308/v1595204765/memory_1.png)

Memory is bounded and finite, you could think of memory as a chocolate bar, it is divided into many memory slots. The reason why space matters to us and we use asymptotic analysis to determine an operation's space complexity is because space is limited.

In the picture we can see that our memory is subdivided into memory slots (#1 to #20). Each number represents a memory address (pretend it is in binary). Suppose each memory slot has a capacity of 1 byte (8 bits).

![App Screenshot](https://res.cloudinary.com/dmct8cfu9/image/upload/c_scale,w_312/v1595216292/memory_2.png)

Let's suppose we declare the `foo` variable that is of the 32 bit integer type with 1 as a value.

When we declare this variable, the operating system allocates enough memory slots to accommodate a 32 bit integer (4 bytes), since each memory slot has a capacity of 1 byte, we allocate 4 memory slots in total to store the value contained in `foo`.

![App Screenshot](https://res.cloudinary.com/dmct8cfu9/image/upload/c_scale,w_308/v1595217879/memory_3.png)

The value contained in `foo` is converted to binary and stored in memory slots #7 to #10. 

NOTE 1: We allocate 4 memory slots even if the value 1 can be written using 1 bit in binary. So the 1st memory slot stores 00000001 the other memory slots will store 0s.
NOTE 2: For now, forget the most significant bit that represents the sign.

## Array

An array's element is stored in memory in a process similar to storing an individual variable. But a difference it that arrays require their elements to be stored in contiguous spaces in memory, so they have to be stored back to back.

![App Screenshot](https://res.cloudinary.com/dmct8cfu9/image/upload/c_scale,w_308/v1595204800/array_1.png)

Let's say our array `foo` is of the 32 bit integer type has length `32` and contains `[1, 2, 3]`.

Since each element is a 32 bit (4 bytes) integer, they require 4 memory slots each. So the operating system allocates enough contiguous space to allocate them.

![App Screenshot](https://res.cloudinary.com/dmct8cfu9/image/upload/c_scale,w_308/v1595219281/array_2.png)

After that, each element is stored in a block of 4 memory slots. The `foo[0]` of the array is stored in memory slots #7 to #10, `foo[1]` is stored in #11 to 14 and `foo[2]` is stored in #15 to #18.

Keep in mind that the variable `foo` contains a pointer that references memory slot #7, that is the memory address of the start of the array, where the position 0 element is stored. To access an element from another position the operating system uses mathematical operations based on the given index and the memory address where the array starts to directly access the desired element.

NOTE: Read about static and dynamic arrays. JavaScript and Python use dynamic arrays for its array, while C++ and Java use static arrays.

## Linked List

A linked list is a data structure that differs from an array in how it is stored in memory.

An array requires enough contiguous space to store all its elements.

Linked lists can store its elements anywhere in memory and it connects those elements using pointers.

![App Screenshot](https://res.cloudinary.com/dmct8cfu9/image/upload/c_scale,w_308/v1595219300/pointer_1.png)

Suppose memory slots #1, #4, #14 and #15 are occupied and we want to store an array `foo` of 32 bit integers of length `2` containing `[1, 2]`. There wouldn't be enough space here.

Suppose we have a linked list: `1 -> 2`.

Linked Lists on the other hand have nodes that contain a value and a pointer that is a reference to the memory address where the value of the next node is located.

So we can store each node separately, but it's still necessary to have enough contiguous memory to store a node's value and its pointer. 

So, since we are using 32 bit integers for each value, 4 memory slots are necessary to store the value and another memory slot is necessary to store the pointer, totalizing 5 memory slots.

![App Screenshot](https://res.cloudinary.com/dmct8cfu9/image/upload/c_scale,w_308/v1595219300/pointer_2.png)

The 1st Node is located on memory slots #6 to #10. Its value occupies slots #6 to #9. The pointer occupies memory slot #10 and points to memory slot #16, where the next node's value that is stored.
NOTE: The 1st node of a linked list is called the head.

The last node of a linked list is called the tail and its pointer points to null or none depending on the programming language. So in this case the 2nd node is also the tail.

NOTE: In our example we used singly linked lists, also read about double linked lists

## Technologies

This project was developed with the following technologies:

-  [JavaScript](https://www.typescriptlang.org/)
-  [ReactJS](https://reactjs.org/)
-  [VS Code][vc]

## How To Use

To clone this application to study the source code, you'll need [Git](https://git-scm.com) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/stevescruz/algorithms_and_data_structures.git

# Go into the repository
$ cd algorithms_and_data_structures
```

## :memo: License
This project is under the MIT license.

---

[Get in touch with me!](https://www.linkedin.com/in/stevescruz/)

[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
