---
title: Hardware Memory
description: Memory is a critical resource for our computing devices. Learn about the various hardware and software capabilities of memory management.
pubDatetime: 2023-09-06T13:11:44.077Z
postSlug: hardware-memory
tags:
  - comptia
  - a-plus
  - core-1
  - hardware
  - certification
  - studying
---

This post will cover various aspects of the **Hardware** section of the [CompTIA A+](https://www.comptia.org/certifications/a) Core 1 certification endeavor.

## Table of contents

## Overview

If you’ve ever installed an application or an operating system, you’ll notice there’s a specification that requires you have a certain amount of memory inside of your system. This memory is referring to **random access memory** or **[RAM](/posts/mobile-devices-laptop-hardware/#ram)**. It’s the type of memory we commonly use inside of our personal computers.

RAM is the main memory in a computer where the operating system ([OS](https://www.techtarget.com/whatis/definition/operating-system-OS)), application programs and data in current use are kept so they can be quickly reached by the device's [processor](https://www.techtarget.com/whatis/definition/processor). It is much faster to read from and write to than [other kinds of storage](/posts/mobile-devices-laptop-hardware/#disk-drives), such as a hard disk drive (HDD), solid-state drive (SSD) or optical drive.

RAM is volatile which means data is retained so long as the computer is on, but it is lost when the computer is turned off. When the computer is rebooted, the OS and other files are reloaded into RAM, usually from an HDD or SSD.

RAM can be compared to a person's short-term memory, and a hard disk drive to a person's long-term memory. Short-term memory is focused on immediate work, but it can only keep a limited number of facts in view at any one time. When a person's short-term memory fills up, it can be refreshed with facts stored in the brain's long-term memory.

### RAM Form factors

The **dual in-line memory module** or **[DIMM](https://www.techtarget.com/searchstorage/definition/DIMM)** is a type of computer memory that is natively 64 bits, enabling fast data transfer. DIMM is a module that contains one or several RAM chips on a small circuit board with pins that connect it to the computer motherboard. The DIMM stores each data bit in a separate memory cell. DIMMs use a 64-bit data path, since processors used in personal computers have a 64-bit data width. DIMMs are typically used in desktop PCs, laptops, printers and other devices.

A **single in-line memory module** or **[SIMM](https://www.techtarget.com/whatis/definition/SIMM-single-in-line-memory-module)** typically has a 32 data bit (36 bits counting [parity](https://www.techtarget.com/searchstorage/definition/parity) bits) path to the computer that requires a 72-pin connector. For synchronous dynamic RAM ([SDRAM](https://www.techtarget.com/whatis/definition/SDRAM-synchronous-DRAM)) chips, which have a 64 data bit connection to the computer, SIMMs must be installed in in-line pairs, since each one supports a 32-bit path. A single DIMM can be used instead. Originally, a DIMM had a 168-pin connector to support 64-bit data transfer.

RAM comes in two primary forms:

- **Dynamic Random Access Memory (**[**DRAM**](https://www.techtarget.com/searchstorage/definition/DRAM)**)** makes up the typical computing device's RAM, and as was previously noted, it needs that power to be on to retain stored data.

Each DRAM cell has a charge or lack of charge held in an electrical capacitor. This data must be constantly refreshed with an electronic charge every few milliseconds to compensate for leaks from the capacitator. A transistor serves as a gate, determining whether a capacitor's value can be read or written.

As faster DRAM was developed, DIMM circuit boards evolved. Modern DIMMs based on double data rate fourth generation (DDR4) SDRAM chips use 288-pin connectors to attach to the computer motherboard to enable the increase in data throughput. As [clock speeds](https://www.techtarget.com/whatis/definition/clock-speed) of the RAM chips increased, the 64-bit path handled increasing amounts of data.

- **Static Random Access Memory (**[**SRAM**](https://www.techtarget.com/whatis/definition/SRAM-static-random-access-memory)**)** also needs constant power to hold on to data, but it doesn't need to be continually refreshed the way DRAM does.

In SRAM, instead of a capacitor holding the charge, the transistor acts as a switch, with one position serving as 1 and the other position as 0. Static RAM requires several transistors to retain one bit of data compared to dynamic RAM which needs only one transistor per bit. As a result, SRAM chips are much larger and more expensive than an equivalent amount of DRAM.

However, SRAM is significantly faster and uses less power than DRAM. The price and speed differences mean static RAM is mainly used in small amounts as [cache memory](https://www.techtarget.com/searchstorage/definition/cache-memory) inside a computer's processor.

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

## Memory technologies

**There are ways to help when you run low on RAM**. When your computer doesn’t have enough memory for all of the actions it’s trying to perform, your programs can stop working. To help prevent information loss, save your files, close all open programs, and restart your programs to free enough memory for programs to work correctly.

Computers have two types of memory, RAM and virtual memory. All programs use RAM, but when there isn’t enough RAM for the program, your computer temporarily moves information that would normally be stored in RAM to a file on the disk storage called a paging file. The amount of information temporarily stored in a paging file is also referred to as virtual memory. Using virtual memory or moving information to and from the paging file frees up enough RAM for programs to run correctly.

### Virtual memory

[Virtual memory](https://www.techtarget.com/searchstorage/definition/virtual-memory) uses both hardware and software to enable a computer to compensate for physical memory shortages, temporarily transferring data from RAM to disk storage. Mapping chunks of memory to disk files enables a computer to treat secondary memory as though it were main memory.

Virtual memory uses both hardware and software to operate. When an application is in use, data from that program is stored in a physical address using RAM. A memory management unit ([MMU](https://www.techtarget.com/whatis/definition/memory-management-unit-MMU)) maps the address to RAM and automatically translates addresses. The MMU can, for example, map a logical address space to a corresponding physical address.

While copying virtual memory into physical memory, the OS divides memory with a fixed number of addresses into either pagefiles or [swap files](https://www.techtarget.com/searchwindowsserver/definition/swap-file-swap-space-or-pagefile). Each page is stored on a disk, and when the page is needed, the OS copies it from the disk to main memory and translates the virtual addresses into real addresses.

Virtual memory is important for improving system performance, multitasking and using large programs. However, users should not overly rely on virtual memory, or swapping virtual memory to physical, since it is considerably slower than RAM. If the OS has to swap data between virtual memory and RAM too often, the computer will begin to slow down, this is called [thrashing](https://www.techtarget.com/whatis/definition/thrashing).

### Multichannel memory

The RAM on the memory module communicates with the rest of the computer through the memory controller on the CPU using a bus.  Some memory controllers have multiple channels for communication with the memory module. This allows faster data exchange, as the data can be sent on more than one channel. There are memory controllers built with one channel, two channels (dual channel), four channels (quad channel), six channels, and eight channels. Six-channel and eight-channel architecture is usually designed for servers.

There are also a few motherboards that run triple-channel architecture. Triple-channel architecture also uses interleaving, which is a method of assigning memory addresses to the memory in a set order.

For dual-channel architecture, the original design combined two 64-bit buses into a single 128-bit bus, which was later called the ganged model. The performance increases were not enough, however. Manufacturers found that two independent buses increased performance more, so the un-ganged model is usually set by default on most modern processors.

### Parity memory

Some RAM chips have built-in error-checking functions that use a process called **[parity](https://www.techtarget.com/searchstorage/definition/parity)**. Chips that use parity have an extra bit for every eight bits of data. In the **parity process**, as the eight bits receive binary data (data represented by 1s and 0s), the chip adds all the 1s, and if that total is odd, the extra bit is set to 1.The most common data error-checking and validation technique is the Vertical Redundancy Check (VRC) often called a parity check.

If the total is even, the extra bit is set to 0. When the computer tries to read each byte of data back from the RAM, it calculates the total number of 1s again and compares its findings to the parity bit. If the findings match up, the data is ruled error-free and can be sent to the CPU.

If the findings don’t match up, the chip assumes the data is erroneous and dumps it. This is called even parity. Odd parity is the same process, except that the extra bit setting is 1 when the sum of all the 1s in the byte is even.

The computer checks a bit for parity each time a byte is transferred or transmitted. The process of parity uses simple arithmetic to determine whether stored data values are the same when they are read as they were when they were written. This is fine for detecting errors, but it doesn’t do anything to correct them. If parity proves data to be faulty, the memory system simply rejects the data and starts over.

High-end computer servers need a more effective form of error-checking, such as error-correcting code (ECC). ECC uses more memory than parity, but with its special algorithm, it can actually fix most errors it finds. Amazingly, many computers operate with non party memory and manage to continue working despite lacking this check. The good news is that memory components used in PCs today have improved and checking the integrity of memory and data is less necessary than it once was for the average home computer.
