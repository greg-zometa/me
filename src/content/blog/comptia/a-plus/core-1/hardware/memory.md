---
title: Hardware Memory
description:
  Memory is a critical resource for our computing devices. Learn about the various hardware and software capabilities of
  memory management.
pubDatetime: 2023-09-06T13:11:44.077Z
postSlug: hardware-memory
featured: true
draft: true
tags:
  - comptia
  - a-plus
  - core-1
  - hardware
  - certification
  - studying
---

This post will cover various aspects of the **Hardware** section of the
[CompTIA A+](https://www.comptia.org/certifications/a) Core 1 certification endeavor.

## Table of contents

## Overview

If you’ve ever installed an application or an operating system, you’ll notice there’s a specification that requires you
have a certain amount of memory inside of your system. This memory is referring to **random access memory** or
**[RAM](/posts/mobile-devices-laptop-hardware/#ram)**. It’s the type of memory we commonly use inside of our personal
computers.

RAM is the main memory in a computer where the operating system
([OS](https://www.techtarget.com/whatis/definition/operating-system-OS)), application programs and data in current use
are kept so they can be quickly reached by the
device's [processor](https://www.techtarget.com/whatis/definition/processor). It is much faster to read from and write
to than [other kinds of storage](/posts/mobile-devices-laptop-hardware/#disk-drives), such as a hard disk drive (HDD),
solid-state drive (SSD) or optical drive.

RAM is volatile which means data is retained so long as the computer is on, but it is lost when the computer is turned
off. When the computer is rebooted, the OS and other files are reloaded into RAM, usually from an HDD or SSD.

RAM can be compared to a person's short-term memory, and a hard disk drive to a person's long-term memory. Short-term
memory is focused on immediate work, but it can only keep a limited number of facts in view at any one time. When a
person's short-term memory fills up, it can be refreshed with facts stored in the brain's long-term memory.

### RAM Form factors

The **dual in-line memory module** or **[DIMM](https://www.techtarget.com/searchstorage/definition/DIMM)** is a type of
computer memory that is natively 64 bits, enabling fast data transfer. DIMM is a module that contains one or several RAM
chips on a small circuit board with pins that connect it to the computer motherboard. The DIMM stores each data bit in a
separate memory cell. DIMMs use a 64-bit data path, since processors used in personal computers have a 64-bit data
width. DIMMs are typically used in desktop PCs, laptops, printers and other devices.

A **single in-line memory module** or
**[SIMM](https://www.techtarget.com/whatis/definition/SIMM-single-in-line-memory-module)** typically has a 32 data bit
(36 bits counting [parity](https://www.techtarget.com/searchstorage/definition/parity) bits) path to the computer that
requires a 72-pin connector. For synchronous dynamic RAM
([SDRAM](https://www.techtarget.com/whatis/definition/SDRAM-synchronous-DRAM)) chips, which have a 64 data bit
connection to the computer, SIMMs must be installed in in-line pairs, since each one supports a 32-bit path. A single
DIMM can be used instead. Originally, a DIMM had a 168-pin connector to support 64-bit data transfer.

RAM comes in two primary forms:

- **Dynamic Random Access Memory (**[**DRAM**](https://www.techtarget.com/searchstorage/definition/DRAM)**)** makes up
  the typical computing device's RAM, and as was previously noted, it needs that power to be on to retain stored data.

Each DRAM cell has a charge or lack of charge held in an electrical capacitor. This data must be constantly refreshed
with an electronic charge every few milliseconds to compensate for leaks from the capacitator. A transistor serves as a
gate, determining whether a capacitor's value can be read or written.

As faster DRAM was developed, DIMM circuit boards evolved. Modern DIMMs based on double data rate fourth generation
(DDR4) SDRAM chips use 288-pin connectors to attach to the computer motherboard to enable the increase in data
throughput. As [clock speeds](https://www.techtarget.com/whatis/definition/clock-speed) of the RAM chips increased, the
64-bit path handled increasing amounts of data.

- **Static Random Access Memory
  (**[**SRAM**](https://www.techtarget.com/whatis/definition/SRAM-static-random-access-memory)**)** also needs constant
  power to hold on to data, but it doesn't need to be continually refreshed the way DRAM does.

In SRAM, instead of a capacitor holding the charge, the transistor acts as a switch, with one position serving as 1 and
the other position as 0. Static RAM requires several transistors to retain one bit of data compared to dynamic RAM which
needs only one transistor per bit. As a result, SRAM chips are much larger and more expensive than an equivalent amount
of DRAM.

However, SRAM is significantly faster and uses less power than DRAM. The price and speed differences mean static RAM is
mainly used in small amounts as [cache memory](https://www.techtarget.com/searchstorage/definition/cache-memory) inside
a computer's processor.

**This table compares DDR SDRAM generations**:

<table>
   <thead>
      <tr>
         <th colspan="2" scope="col">Name
         </th>
         <th rowspan="2" scope="col">Release<br>year
         </th>
         <th colspan="3" scope="col">Chip
         </th>
         <th colspan="3" scope="col">Bus
         </th>
         <th rowspan="2" scope="col">Voltage<br>(V)
         </th>
         <th colspan="3" scope="col">Pins
         </th>
      </tr>
      <tr>
         <th scope="col">Gen
         </th>
         <th scope="col">Standard
         </th>
         <th scope="col">Clock rate<br>(MHz)
         </th>
         <th scope="col">Cycle time<br>(ns)
         </th>
         <th scope="col">Pre-<br>fetch
         </th>
         <th scope="col">Clock rate<br>(MHz)
         </th>
         <th scope="col">Transfer rate<br>(MT/s)
         </th>
         <th scope="col">Bandwidth<br>(MB/s)
         </th>
         <th scope="col">DIMM
         </th>
         <th scope="col">SO-<br>DIMM
         </th>
         <th scope="col">Micro-<br>DIMM
         </th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <th rowspan="1" scope="row">DDR
         </th>
         <th>DDR-200
         </th>
         <td rowspan="1">1998
         </td>
         <td>100
         </td>
         <td>10
         </td>
         <td rowspan="1">2n
         </td>
         <td>100
         </td>
         <td>200
         </td>
         <td>1600
         </td>
         <td rowspan="1">2.5
         </td>
         <td rowspan="1">184
         </td>
         <td rowspan="1">200
         </td>
         <td rowspan="1">172
         </td>
      </tr>
      <tr>
         <th rowspan="1" scope="row">DDR
         </th>
         <th>DDR-266
         </th>
         <td rowspan="1">1998
         </td>
         <td>133
         </td>
         <td>7.5
         </td>
         <td rowspan="1">2n
         </td>
         <td>133
         </td>
         <td>266
         </td>
         <td>2133<sup>1⁄3</sup>
         </td>
         <td rowspan="1">2.5
         </td>
         <td rowspan="1">184
         </td>
         <td rowspan="1">200
         </td>
         <td rowspan="1">172
         </td>
      </tr>
      <tr>
         <th rowspan="1" scope="row">DDR
         </th>
         <th>DDR-333
         </th>
         <td rowspan="1">1998
         </td>
         <td>166<sup>2⁄3</sup>
         </td>
         <td>6
         </td>
         <td rowspan="1">2n
         </td>
         <td>166<sup>2⁄3</sup>
         </td>
         <td>333
         </td>
         <td>2666<sup>2⁄3</sup>
         </td>
         <td rowspan="1">2.5
         </td>
         <td rowspan="1">184
         </td>
         <td rowspan="1">200
         </td>
         <td rowspan="1">172
         </td>
      </tr>
      <tr>
         <th rowspan="1" scope="row">DDR
         </th>
         <th>DDR-400
         </th>
         <td rowspan="1">1998
         </td>
         <td>200
         </td>
         <td>5
         </td>
         <td rowspan="1">2n
         </td>
         <td>200
         </td>
         <td>400
         </td>
         <td>3200
         </td>
         <td>2.6
         </td>
         <td rowspan="1">184
         </td>
         <td rowspan="1">200
         </td>
         <td rowspan="1">172
         </td>
      </tr>
      <tr>
         <th rowspan="1" scope="row">DDR2
         </th>
         <th>DDR2-400
         </th>
         <td rowspan="1">2003
         </td>
         <td>100
         </td>
         <td>10
         </td>
         <td rowspan="1">4n
         </td>
         <td>200
         </td>
         <td>400
         </td>
         <td>3200
         </td>
         <td rowspan="1">1.8
         </td>
         <td rowspan="1">240
         </td>
         <td rowspan="1">200
         </td>
         <td rowspan="1">214
         </td>
      </tr>
      <tr>
         <th rowspan="1" scope="row">DDR2
         </th>
         <th>DDR2-533
         </th>
         <td rowspan="1">2003
         </td>
         <td>133<sup>1⁄3</sup>
         </td>
         <td>7.5
         </td>
         <td rowspan="1">4n
         </td>
         <td>266<sup>2⁄3</sup>
         </td>
         <td>533<sup>1⁄3</sup>
         </td>
         <td>4266<sup>2⁄3</sup>
         </td>
         <td rowspan="1">1.8
         </td>
         <td rowspan="1">240
         </td>
         <td rowspan="1">200
         </td>
         <td rowspan="1">214
         </td>
      </tr>
      <tr>
         <th rowspan="1" scope="row">DDR2
         </th>
         <th>DDR2-667
         </th>
         <td rowspan="1">2003
         </td>
         <td>166<sup>2⁄3</sup>
         </td>
         <td>6
         </td>
         <td rowspan="1">4n
         </td>
         <td>333<sup>1⁄3</sup>
         </td>
         <td>666<sup>2⁄3</sup>
         </td>
         <td>5333<sup>1⁄3</sup>
         </td>
         <td rowspan="1">1.8
         </td>
         <td rowspan="1">240
         </td>
         <td rowspan="1">200
         </td>
         <td rowspan="1">214
         </td>
      </tr>
      <tr>
         <th rowspan="1" scope="row">DDR2
         </th>
         <th>DDR2-800
         </th>
         <td rowspan="1">2003
         </td>
         <td>200
         </td>
         <td>5
         </td>
         <td rowspan="1">4n
         </td>
         <td>400
         </td>
         <td>800
         </td>
         <td>6400
         </td>
         <td rowspan="1">1.8
         </td>
         <td rowspan="1">240
         </td>
         <td rowspan="1">200
         </td>
         <td rowspan="1">214
         </td>
      </tr>
      <tr>
         <th rowspan="1" scope="row">DDR2
         </th>
         <th>DDR2-1066
         </th>
         <td rowspan="1">2003
         </td>
         <td>266<sup>2⁄3</sup>
         </td>
         <td>3.75
         </td>
         <td rowspan="1">4n
         </td>
         <td>533<sup>1⁄3</sup>
         </td>
         <td>1066<sup>2⁄3</sup>
         </td>
         <td>8533<sup>1⁄3</sup>
         </td>
         <td rowspan="1">1.8
         </td>
         <td rowspan="1">240
         </td>
         <td rowspan="1">200
         </td>
         <td rowspan="1">214
         </td>
      </tr>
      <tr>
         <th rowspan="1" scope="row">DDR3
         </th>
         <th>DDR3-800
         </th>
         <td rowspan="1">2007
         </td>
         <td>100
         </td>
         <td>10
         </td>
         <td rowspan="1">8n
         </td>
         <td>400
         </td>
         <td>800
         </td>
         <td>6400
         </td>
         <td rowspan="1">1.5/1.35
         </td>
         <td rowspan="1">240
         </td>
         <td rowspan="1">204
         </td>
         <td rowspan="1">214
         </td>
      </tr>
      <tr>
         <th rowspan="1" scope="row">DDR3
         </th>
         <th>DDR3-1066
         </th>
         <td rowspan="1">2007
         </td>
         <td>133<sup>1⁄3</sup>
         </td>
         <td>7.5
         </td>
         <td rowspan="1">8n
         </td>
         <td>533<sup>1⁄3</sup>
         </td>
         <td>1066<sup>2⁄3</sup>
         </td>
         <td>8533<sup>1⁄3</sup>
         </td>
         <td rowspan="1">1.5/1.35
         </td>
         <td rowspan="1">240
         </td>
         <td rowspan="1">204
         </td>
         <td rowspan="1">214
         </td>
      </tr>
      <tr>
         <th rowspan="1" scope="row">DDR3
         </th>
         <th>DDR3-1333
         </th>
         <td rowspan="1">2007
         </td>
         <td>166<sup>2⁄3</sup>
         </td>
         <td>6
         </td>
         <td rowspan="1">8n
         </td>
         <td>666<sup>2⁄3</sup>
         </td>
         <td>1333<sup>1⁄3</sup>
         </td>
         <td>10600<sup>2⁄3</sup>
         </td>
         <td rowspan="1">1.5/1.35
         </td>
         <td rowspan="1">240
         </td>
         <td rowspan="1">204
         </td>
         <td rowspan="1">214
         </td>
      </tr>
      <tr>
         <th rowspan="1" scope="row">DDR3
         </th>
         <th>DDR3-1600
         </th>
         <td rowspan="1">2007
         </td>
         <td>200
         </td>
         <td>5
         </td>
         <td rowspan="1">8n
         </td>
         <td>800
         </td>
         <td>1600
         </td>
         <td>12800
         </td>
         <td rowspan="1">1.5/1.35
         </td>
         <td rowspan="1">240
         </td>
         <td rowspan="1">204
         </td>
         <td rowspan="1">214
         </td>
      </tr>
      <tr>
         <th rowspan="1" scope="row">DDR3
         </th>
         <th>DDR3-1866
         </th>
         <td rowspan="1">2007
         </td>
         <td>233<sup>1⁄3</sup>
         </td>
         <td>4.29
         </td>
         <td rowspan="1">8n
         </td>
         <td>933<sup>1⁄3</sup>
         </td>
         <td>1866<sup>2⁄3</sup>
         </td>
         <td>14933<sup>1⁄3</sup>
         </td>
         <td rowspan="1">1.5/1.35
         </td>
         <td rowspan="1">240
         </td>
         <td rowspan="1">204
         </td>
         <td rowspan="1">214
         </td>
      </tr>
      <tr>
         <th rowspan="1" scope="row">DDR3
         </th>
         <th>DDR3-2133
         </th>
         <td rowspan="1">2007
         </td>
         <td>266<sup>2⁄3</sup>
         </td>
         <td>3.75
         </td>
         <td rowspan="1">8n
         </td>
         <td>1066<sup>2⁄3</sup>
         </td>
         <td>2133<sup>1⁄3</sup>
         </td>
         <td>17066<sup>2⁄3</sup>
         </td>
         <td rowspan="1">1.5/1.35
         </td>
         <td rowspan="1">240
         </td>
         <td rowspan="1">204
         </td>
         <td rowspan="1">214
         </td>
      </tr>
      <tr>
         <th rowspan="1" scope="row">DDR4
         </th>
         <th>DDR4-1600
         </th>
         <td rowspan="1">2014
         </td>
         <td>200
         </td>
         <td>5
         </td>
         <td rowspan="1">8n
         </td>
         <td>800
         </td>
         <td>1600
         </td>
         <td>12800
         </td>
         <td rowspan="1">1.2/1.05
         </td>
         <td rowspan="1">288
         </td>
         <td rowspan="1">260
         </td>
         <td rowspan="1">-
         </td>
      </tr>
      <tr>
         <th rowspan="1" scope="row">DDR4
         </th>
         <th>DDR4-1866
         </th>
         <td rowspan="1">2014
         </td>
         <td>233<sup>1⁄3</sup>
         </td>
         <td>4.29
         </td>
         <td rowspan="1">8n
         </td>
         <td>933<sup>1⁄3</sup>
         </td>
         <td>1866<sup>2⁄3</sup>
         </td>
         <td>14933<sup>1⁄3</sup>
         </td>
         <td rowspan="1">1.2/1.05
         </td>
         <td rowspan="1">288
         </td>
         <td rowspan="1">260
         </td>
         <td rowspan="1">-
         </td>
      </tr>
      <tr>
         <th rowspan="1" scope="row">DDR4
         </th>
         <th>DDR4-2133
         </th>
         <td rowspan="1">2014
         </td>
         <td>266<sup>2⁄3</sup>
         </td>
         <td>3.75
         </td>
         <td rowspan="1">8n
         </td>
         <td>1066<sup>2⁄3</sup>
         </td>
         <td>2133<sup>1⁄3</sup>
         </td>
         <td>17066<sup>2⁄3</sup>
         </td>
         <td rowspan="1">1.2/1.05
         </td>
         <td rowspan="1">288
         </td>
         <td rowspan="1">260
         </td>
         <td rowspan="1">-
         </td>
      </tr>
      <tr>
         <th rowspan="1" scope="row">DDR4
         </th>
         <th>DDR4-2400
         </th>
         <td rowspan="1">2014
         </td>
         <td>300
         </td>
         <td>3<sup>1⁄3</sup>
         </td>
         <td rowspan="1">8n
         </td>
         <td>1200
         </td>
         <td>2400
         </td>
         <td>19200
         </td>
         <td rowspan="1">1.2/1.05
         </td>
         <td rowspan="1">288
         </td>
         <td rowspan="1">260
         </td>
         <td rowspan="1">-
         </td>
      </tr>
      <tr>
         <th rowspan="1" scope="row">DDR4
         </th>
         <th>DDR4-2666
         </th>
         <td rowspan="1">2014
         </td>
         <td>333<sup>1⁄3</sup>
         </td>
         <td>3
         </td>
         <td rowspan="1">8n
         </td>
         <td>1333<sup>1⁄3</sup>
         </td>
         <td>2666<sup>2⁄3</sup>
         </td>
         <td>21333<sup>1⁄3</sup>
         </td>
         <td rowspan="1">1.2/1.05
         </td>
         <td rowspan="1">288
         </td>
         <td rowspan="1">260
         </td>
         <td rowspan="1">-
         </td>
      </tr>
      <tr>
         <th rowspan="1" scope="row">DDR4
         </th>
         <th>DDR4-2933
         </th>
         <td rowspan="1">2014
         </td>
         <td>366<sup>2⁄3</sup>
         </td>
         <td>2.73
         </td>
         <td rowspan="1">8n
         </td>
         <td>1466<sup>2⁄3</sup>
         </td>
         <td>2933<sup>1⁄3</sup>
         </td>
         <td>23466<sup>2⁄3</sup>
         </td>
         <td rowspan="1">1.2/1.05
         </td>
         <td rowspan="1">288
         </td>
         <td rowspan="1">260
         </td>
         <td rowspan="1">-
         </td>
      </tr>
      <tr>
         <th rowspan="1" scope="row">DDR4
         </th>
         <th>DDR4-3200
         </th>
         <td rowspan="1">2014
         </td>
         <td>400
         </td>
         <td>2.5
         </td>
         <td rowspan="1">8n
         </td>
         <td>1600
         </td>
         <td>3200
         </td>
         <td>25600
         </td>
         <td rowspan="1">1.2/1.05
         </td>
         <td rowspan="1">288
         </td>
         <td rowspan="1">260
         </td>
         <td rowspan="1">-
         </td>
      </tr>
      <tr>
         <th rowspan="1">DDR5
         </th>
         <th>DDR5-3200
         </th>
         <td rowspan="1">2020
         </td>
         <td>200
         </td>
         <td>5
         </td>
         <td rowspan="1">16n
         </td>
         <td>1600
         </td>
         <td>3200
         </td>
         <td>25600
         </td>
         <td rowspan="1">1.1
         </td>
         <td rowspan="1">288
         </td>
         <td rowspan="1">262
         </td>
         <td rowspan="1">
         </td>
      </tr>
      <tr>
         <th rowspan="1">DDR5
         </th>
         <th>DDR5-3600
         </th>
         <td rowspan="1">2020
         </td>
         <td>225
         </td>
         <td>4.44
         </td>
         <td rowspan="1">16n
         </td>
         <td>1800
         </td>
         <td>3600
         </td>
         <td>28800
         </td>
         <td rowspan="1">1.1
         </td>
         <td rowspan="1">288
         </td>
         <td rowspan="1">262
         </td>
         <td rowspan="1">
         </td>
      </tr>
      <tr>
         <th rowspan="1">DDR5
         </th>
         <th>DDR5-4000
         </th>
         <td rowspan="1">2020
         </td>
         <td>250
         </td>
         <td>4
         </td>
         <td rowspan="1">16n
         </td>
         <td>2000
         </td>
         <td>4000
         </td>
         <td>32000
         </td>
         <td rowspan="1">1.1
         </td>
         <td rowspan="1">288
         </td>
         <td rowspan="1">262
         </td>
         <td rowspan="1">
         </td>
      </tr>
      <tr>
         <th rowspan="1">DDR5
         </th>
         <th>DDR5-4800
         </th>
         <td rowspan="1">2020
         </td>
         <td>300
         </td>
         <td>3<sup>1⁄3</sup>
         </td>
         <td rowspan="1">16n
         </td>
         <td>2400
         </td>
         <td>4800
         </td>
         <td>38400
         </td>
         <td rowspan="1">1.1
         </td>
         <td rowspan="1">288
         </td>
         <td rowspan="1">262
         </td>
         <td rowspan="1">
         </td>
      </tr>
      <tr>
         <th rowspan="1">DDR5
         </th>
         <th>DDR5-5000
         </th>
         <td rowspan="1">2020
         </td>
         <td>312<sup>1⁄2</sup>
         </td>
         <td>3.2
         </td>
         <td rowspan="1">16n
         </td>
         <td>2500
         </td>
         <td>5000
         </td>
         <td>40000
         </td>
         <td rowspan="1">1.1
         </td>
         <td rowspan="1">288
         </td>
         <td rowspan="1">262
         </td>
         <td rowspan="1">
         </td>
      </tr>
      <tr>
         <th rowspan="1">DDR5
         </th>
         <th>DDR5-5120
         </th>
         <td rowspan="1">2020
         </td>
         <td>320
         </td>
         <td>3<sup>1⁄8</sup>
         </td>
         <td rowspan="1">16n
         </td>
         <td>2560
         </td>
         <td>5120
         </td>
         <td>40960
         </td>
         <td rowspan="1">1.1
         </td>
         <td rowspan="1">288
         </td>
         <td rowspan="1">262
         </td>
         <td rowspan="1">
         </td>
      </tr>
      <tr>
         <th rowspan="1">DDR5
         </th>
         <th>DDR5-5333
         </th>
         <td rowspan="1">2020
         </td>
         <td>333<sup>1⁄3</sup>
         </td>
         <td>3
         </td>
         <td rowspan="1">16n
         </td>
         <td>2666<sup>2⁄3</sup>
         </td>
         <td>5333<sup>1⁄3</sup>
         </td>
         <td>4266<sup>2⁄3</sup>
         </td>
         <td rowspan="1">1.1
         </td>
         <td rowspan="1">288
         </td>
         <td rowspan="1">262
         </td>
         <td rowspan="1">
         </td>
      </tr>
      <tr>
         <th rowspan="1">DDR5
         </th>
         <th>DDR5-5600
         </th>
         <td rowspan="1">2020
         </td>
         <td>350
         </td>
         <td>2.86
         </td>
         <td rowspan="1">16n
         </td>
         <td>2800
         </td>
         <td>5600
         </td>
         <td>44800
         </td>
         <td rowspan="1">1.1
         </td>
         <td rowspan="1">288
         </td>
         <td rowspan="1">262
         </td>
         <td rowspan="1">
         </td>
      </tr>
      <tr>
         <th rowspan="1">DDR5
         </th>
         <th>DDR5-6400
         </th>
         <td rowspan="1">2020
         </td>
         <td>400
         </td>
         <td>2.5
         </td>
         <td rowspan="1">16n
         </td>
         <td>3200
         </td>
         <td>6400
         </td>
         <td>51200
         </td>
         <td rowspan="1">1.1
         </td>
         <td rowspan="1">288
         </td>
         <td rowspan="1">262
         </td>
         <td rowspan="1">
         </td>
      </tr>
      <tr>
         <th rowspan="1">DDR5
         </th>
         <th>DDR5-7200
         </th>
         <td rowspan="1">2020
         </td>
         <td>450
         </td>
         <td>2.22
         </td>
         <td rowspan="1">16n
         </td>
         <td>3600
         </td>
         <td>7200
         </td>
         <td>57600
         </td>
         <td rowspan="1">1.1
         </td>
         <td rowspan="1">288
         </td>
         <td rowspan="1">262
         </td>
         <td rowspan="1">
         </td>
      </tr>
   </tbody>
   <tfoot></tfoot>
</table>

## Memory Technologies

Let’s start our conversation about memory technologies with what we do when we run out of memory. There are ways to help
when you run low on random access memory. And one of the things you can do is take information you’re not currently
using in RAM and swap it out to a hard drive or SSD.

We sometimes refer to this as virtual memory, although we can also refer to it as virtual RAM or a swap file. In Windows
in the Performance Options, there’s an Advanced tab that allows you to configure a virtual memory section. This is an
area of your hard drive or SSD that Windows can use as if it was actual memory. Obviously, a hard drive or SSD is slower
than actual random access memory so this is really an area where we’re temporarily storing things until we find more
room within our normal random access memory.

Many operating systems will manage this process automatically. In Windows, there’s a checkbox that says “Automatically
manage paging file size for all drives.” But you can manage this yourself. If you uncheck that option, you can specify
exactly how much virtual memory you’d like to allocate on your storage drive.

Another memory technology that can greatly increase the throughput in your system is multichannel memory. Sometimes
you’ll see this as dual channel, triple channel, or quad channel memory. This takes the throughput that normally would
be sent to one single memory module and spreads that load across multiple memory modules. Ideally, you would have
exactly the same memory module types in each of these multichannel slots. If your motherboard supports multichannel
memory, then you might want to look at the memory modules and see if they have different colors. This is often done so
that you know exactly which slots to use for the multichannel memory.

One thing you might have to consider is what might happen to your system if there happens to be an error with the memory
that you’re using. In some environments, you’re able to have memory check itself. And if a memory does occur, then we
can choose to perform some other functions. This is the type of memory that you might have in a system that’s running
virtual machines. It may be very large database servers or anything where you want to maintain the uptime and
availability of those services.

One type of memory you might use is parity memory. This adds an additional parity bit to the information that you’re
storing in RAM. This isn’t a perfect way to identify problems because parity memory can’t always identify when an error
has occurred. And parity memory has no method to be able to correct any problems that it happens to find.

If you would like to use memory that can make corrections to any problems, then you want to use a motherboard that can
support error correcting code memory or ECC memory. This will not only identify when an error has occurred but it will
make a change to the memory to correct any of those problems. It’s this parity bit that allows us to identify when an
error may have occurred with the data. Many memory modules use even parity, which means adding the parity bit means that
there will be an even number of ones in that data.

Let’s see how this parity bit is calculated and added to the existing data. Let’s look at this first line of data. And
we want to count the number of ones. So in this particular data that’s 1, 1, 1, 0, 0, 1, 1, 1, we have one, two, three,
four, five, six ones within that data. That six is already an even number so we don’t need any additional ones to make
this even. Therefore, the parity bit will be zero.

Let’s take the next bit of data. This data is 0, 0, 0, 0, 0, 0, 1, 0. If we count the number of ones, there is a single
one which means there are an odd number of ones. To be able to make this even parity, we need to add one more one into
this mix so that we have an even number of ones in this data.

And lastly, we have 1, 0, 0, 1, 1, 0, 0, 0.. We count the number of ones. There are one, two, three, ones. That’s an odd
number. So to get even parity, we’re going to add a one. And now we have an even number of ones in that data.

So with the existing parity bit, we can run some tests of some data that may already be existing to see if the data
appears to be correct. So let’s evaluate the parity bit, assuming that we’re using even parity. We’ll take this first
bit of data and count the number of ones. We have 0, 0, 0, 0, 0, 1, 1, 1, 1 with a one as the parity bit. And if we
count the number of ones, we have four ones. That is an even number. Therefore that data has been validated.

Let’s do the next bit of data, which is 0, 0,0 0, 0, 0, 0, 1, 0, with a 0 on the end. We count the number of ones. That
one is an odd number, which means something has gone wrong with that data and it does not validate. And then lastly, we
have 0, 1, 1, 0, 0, 1, 0, 0 with a one parity bit. If we count the number of ones, there’s one, two, three, four ones,
which means it is even parity. That validates and that data appears to be correct.
