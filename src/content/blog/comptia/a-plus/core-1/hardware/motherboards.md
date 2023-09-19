---
title: Motherboards
description: The motherboard is the backbone that ties the computer's components together at one spot and allows them to talk to each other. Without it, none of the computer pieces, such as the CPU, GPU, or hard drive, could interact. Learn about what the motherboard does and the must-know for it to work well.
pubDatetime: 2023-09-18T15:00:00.455Z
postSlug: hardware-motherboards
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

This post will cover various aspects of the **Hardware** section of the [CompTIA A+](https://www.comptia.org/certifications/a) Core 1 certification endeavor.

## Table of contents

## Overview

The fundamental physical component within all of our computers is the motherboard. The motherboard is a computer's central communications backbone connectivity point, through which all components and external peripherals connect.

Motherboards can be found in virtually all computers, especially desktop and laptop PCs. The components generally contains the CPU, connectivity to power, and additional slots for expanding the capabilities of the system.

## Form factors

There are different motherboards that have different sizes depending on the hardware's requirements. There’s usually a basic layout on motherboards regardless of the size, but the amount of expansion slots and the amount of additional memory slots will vary.

[There are dozens of different motherboard form factors](https://en.wikipedia.org/wiki/Motherboard_form_factor). For the CompTIA exam, there are two primary motherboard families you need to know: [the ATX family](https://en.wikipedia.org/wiki/ATX) and [the ITX family](https://en.wikipedia.org/wiki/Mini-ITX).

### ATX

Short for advanced technology extended, **ATX** is the motherboard that you’d most likely find in a desktop computer. It has a lot of real estate, plenty of expansion slots, lots of memory, and there’s plenty of room inside of a desktop for this size of motherboard.

First released in July 1995 by Intel, ATX has since had many revisions. The first was version 2.01 in February 1997, then 2.03 in May 2000, 2.1 in June 2002, and 2.2 in February 2004. If you’re buying a computer for a desktop today, you’re probably buying an ATX motherboard with a power connector that’s 20 or 24 pins in size, and there may be additional power on the motherboard for CPU.

### ITX

Short for Information Technology eXtended, **ITX** is a small motherboard form factor from VIA Technologies released in November 2001 with the Mini-ITX. With the compact configuration of ITX motherboards, they are used in low-cost small setups found in cars, network devices, set-top boxes, and other small computers.

Later versions of ITX include the Nano-ITX released in March 2003, the Mobile-ITX released in March 2004, and the Pico-ITX released in April 2007. An important feature of a variety of ITX motherboards are its low power consumption, using less than 25 watts of power, with some as few as five watts.

## Expansion slots

There are times when we might want to add additional functionality to our motherboard by adding an expansion card into one of the available slots. Alternatively known as a **bus slot** or **expansion port**, an **expansion slot** is a connection or port inside a computer on the motherboard or riser card. It provides an installation point for a hardware expansion card to be connected and communicate with the memory and the CPU.

### PCI

If you’re working with an older computer, you may see some expansion slots that are **PCI**, **Peripheral Component Interconnect**. Peripheral Component Interconnect is a common connection interface for attaching computer peripherals to the motherboard. PCI was popular between 1995 and 2005 and was most often used to connect sound cards, network cards, and video cards.

A PCI bus lets you change different peripherals that are attached to the computer system. Usually, there are three or four PCI slots on a motherboard. With PCI, you can unplug the component you want to swap and plug in the new one in the PCI slot. If you have an open slot, you can add another peripheral like a second hard drive.

Computers might have more than one type of bus to handle different traffic types. The PCI bus used to come in both 32-bit and 64-bit versions. PCI runs at 33 MHz or 66 MHz.

### PCIe

Modern computers mainly use other interface technologies like USB or [PCI Express](https://www.techtarget.com/searchdatacenter/definition/PCI-Express) (PCIe). Some desktop computers might have PCI slots on the motherboard to maintain backward compatibility. However, the devices that were attached as PCI expansion cards are now either integrated onto motherboards or attached by other connectors like PCIe.

With PCIe, data is transferred over two signal pairs: two wires for transmitting and two wires for receiving. Each set of signal pairs is called a "lane," and each lane is capable of sending and receiving eight-bit data packets simultaneously between two points.

PCIe can scale from **one to 32 separate lanes**; it is usually deployed with 1, 4, 8, 12, 16 or 32 lanes. The lane count of a PCIe card is a determining factor in its performance and therefore in its price. PCIe provides lower latency and higher data transfer rates than parallel busses such as PCI and PCI-X. Every device that's connected to a motherboard with a PCIe link has its own dedicated point-to-point connection. This means that devices are not competing for bandwidth because they are not sharing the same bus.

## Connectors

The motherboard connections go to the CPU, RAM, ROM, expansion slots, PCI slots, USB ports, and power. There are also motherboard connectors/controllers for devices such as the hard drive, mouse, and keyboard.

All motherboards have **front panel connectors**, sometimes called **headers** or **pin headers**, that a PC case connects to. Front Panel Connectors connect the PC Case’s Power Switch, Reset Switch, and LED indicators to the motherboard.

There are five primary functions that almost all front panel headers have:

1. **Power Switch Pins** — Abbreviated as PWRSW or simply PW, these are two pins connecting to the Power Button cable from the PC case.
2. **Reset Switch Pins** — These are two pins connecting to the PC case’s reset switch.
3. **Power LED Pins** — These are three pins that connect to the LED light on the PC case, indicating whether the PC is on, off, or in sleep mode.
4. **Hard Disk LED Pins** — These are two pins that indicate the activity of the hard disk by flashing repeatedly.
5. **Speaker Pins** — There are four pins for the beep code speaker. Many PC Cases come with a **beep code speaker**. _Note that a beep code speaker is NOT the same as a stereo speaker._

### Power

A computer is composed of several electronic components that require power, with each part needing different voltages to work correctly. So, you need a power supply to deliver all these different power requirements.

A **power supply unit** or **PSU**, is specifically designed for desktop computers to supply appropriate voltages for each PC component, such as CPU, GPU, motherboard, and storage drives. It does so by providing several power connectors with varying numbers of pins which can sometimes be split to support different motherboards and CPUs.

**This table illustrates the most common PSU power connectors, including their names, function, and power specifications**:

| Connector                        | Function                              | Voltage(s)           | Wattage |
| -------------------------------- | ------------------------------------- | -------------------- | ------- |
| 24-pin (20+4 pin) ATX main power | Supplies power to the motherboard     | +3.3V, +5V, and +12V | 300W    |
| 4-pin ATX 12V power              | Supplies power to the low-powered CPU | +12V                 | 120W    |
| 8-pin (4+4 pin) EPS12V           | Supplies Extra Power to the CPU       | +12V                 | 336W    |
| 8-pin (6+2 pin) PCIe power       | Supplies power to graphics cards      | +12V                 | 150W    |
| SATA power connector             | Supplies power to SATA drives         | +5V, +12V            | 54W     |
| Molex power connector            | Supplies power to older IDE drives    | +5V, +12V            | 132W    |

Before connecting the power supply to the motherboard, make sure all power sources are disconnected and then connect that directly into the motherboard with the orientation that matches the keys on the individual pins.

### Memory

Storage devices such as hard disk drives and solid state drives connect to the motherboard via SATA. There may be situations where you don’t have any room to install a new drive inside of your computer case or perhaps you have an external drive that you would like to use.

In those cases, you might want to use an eSATA connection for external Serial ATA. That external connection is usually provided with a built-in interface on the motherboard. This allows us to connect an external storage device, but we still have the same throughput and performance as an internal SATA connection.

You might also find on your motherboard an M.2 connector. This is on newer motherboards that can support connectivity using this M.2 standard. One very common use of these M.2 connectors is to plug in an SSD and be able to have all of your storage on this very small device connected to the motherboard.

## Compatibility

If you’re building your own computer, one of the first decisions you’ll need to make are whether this will be an Intel-based motherboard or an AMD-based motherboard. These are two very popular CPU manufacturers. And all of the other systems on your motherboard will be based around this decision. This decision might be based on the cost of the motherboard and the CPU.

Some combinations of motherboards and CPUs are different, depending on whether they are Intel-based or AMD-based. And sometimes the most inexpensive device is the one that generally wins. Once you make the decision on whether you’re going with an AMD-based motherboard or an Intel-based motherboard, you’re effectively locked into that decision. You can’t remove an AMD CPU and replace it with an Intel CPU.

Not only are the CPUs very different in how they are designed and how they operate, but the sockets themselves are very different between manufacturers. Whether you go with Intel or AMD, the decision is usually based on a number of criteria. Traditionally, we thought of AMD as being the more cost-effective CPU and Intel as having the more powerful CPU. But you’ll find that these two criteria change quite a bit as time goes on. And you’ll have to check the specifications for your motherboard and your CPU to see if you’re getting exactly what you want out of that system.

The installation of the CPU is very similar, regardless of which manufacturer’s motherboard you go with. Usually, there’s a cover that holds the CPU in place. You would lift that cover, simply place the CPU into the socket, and then bring the cover back down to lock it in place. If you’re designing a system that will be used as a server, then you’re probably configuring a motherboard that has multiple CPU sockets on it. This might allow you to start with a single CPU and upgrade it to dual CPUs later or to simply install it with two CPUs to support a higher load.

With laptops, we tend to focus on portability. So the motherboard you would have in a laptop tend to be very small and very light. The CPUs in a laptop are not necessarily designed for speed but instead for power usage and efficiency. And since there’s no space inside of these laptops for much cooling, the CPUs are designed to throttle when the system becomes warmer. That way you’re able to have the system continue to work but not damage itself through any type of overheating.

Laptops are also much less customizable than a desktop system. With the desktop, we can take the cover off. We can add new capabilities into the expansion slots. We can swap out memory or CPU. But in a laptop, it’s very difficult to gain access to all of that inside of the system. So on your laptop, you may not have many options available for memory upgrades, any changes to the CPU, or modifying or adding on any additional features to the existing motherboard.

The goal with these motherboards is to have something that is as portable as possible but also something that does not use a lot of power and can run for a very long time from battery. Unlike desktops, where you can remove one ATX motherboard and replace it with another ATX motherboard, you don’t have quite the same flexibility with a laptop system. Laptop motherboards are usually proprietary. And they’re often specifically built and designed for that specific laptop model.

If you need to replace the motherboard, you have to replace it with the exact type of motherboard design for that laptop. And since your interfaces, your CPU, your memory, and other features are part of that system board, if any part of that happens to stop working, you’ve got to replace the entire motherboard.

## The BIOS

When you start your computer, something has to begin the process of loading an operating system. On most of our personal computers, this is the BIOS, the Basic Input Output System. This is the software that starts up when you hit that power button.

This is sometimes referred to as the firmware of your system. It’s the system BIOS or the ROM BIOS, or in some cases, the ROM or flash memory. These days, we don’t generally use Read Only Memory or ROM. Almost everything relating to the BIOS today is stored in flash memory. When you power on your system, it initializes the memory and the CPU, and it begins executing the code of the BIOS.

After the CPU and memory is initialized, you have the post or power on self-test. This is not a comprehensive hardware diagnostics. It’s merely checking to see if you have memory, CPU, video, and some type of input, such as a keyboard or mouse. If all of those components are in place, your BIOS will look to see what you’ve configured to be the boot drive, and then it will look for a boot loader installed on that boot drive so that it can start the operating system.

The flash memory used by the BIOS can usually be found on your motherboard. This motherboard has two separate BIOS configurations, one that is a main BIOS config and a backup BIOS config. This allows you to upgrade the BIOS on your system. And if something goes wrong with the upgrade, you can revert back to the previous version. If you’re working with an older computer, you might have a text-based BIOS like this one. This is the legacy BIOS, and it’s the one that’s been around for about 25 years. Most older operating systems were able to interact with the hardware using this legacy BIOS.

We can make very basic configuration changes from this legacy BIOS, but there’s no way to change or upgrade the capabilities of this BIOS. There’s no way to add additional drivers so that you can connect different network interfaces, and there’s no way to somehow interact or add on to the capabilities of the BIOS itself. The BIOS that’s in our most modern computers is called a UEFI BIOS. The UEFI stands for Unified Extensible Firmware Interface, and it is a standard form of BIOS that can be used across multiple manufacturers.

This is a standard that was created by Intel called the EFI standard or the Extensible Firmware Interface standard. It allows many different manufacturers to create a BIOS that all is standardized on the same features and capabilities. It’s designed to replace a legacy BIOS. So any of the new computers you use today will be using a UEFI BIOS instead of the traditional legacy BIOS.

The next category over is the security category. So if you’d like to add a user or administrator password, you would do all of these settings from the security area of this particular UEFI BIOS. There’s also an Advanced tab at the top so you can change things like the boot options to determine how your system should start up. And this last tab is for UEFI drivers, which is a UEFI-specific capability. This allows you to install additional hardware drivers so that you can interact with other components that may be connected to your computer, such as a network interface card storage or any other hardware device on that system.

## BIOS Settings

## CPU Features

Most of the latest operating systems are 64-bit architectures. But you might find older operating systems still running that are 32-bit architectures. These are referring to the architecture of the CPU that is running on the motherboard of that system. And usually, it’s either a 32-bit or a 64-bit architecture.

A 32-bit processor can access up to 2 to the 32nd power of information. That is just over 4 billion values that can be accessed in that operating system. If you have a 64-bit architecture, that goes up dramatically to a 2 to the 64th power, which is an extremely large amount of data.

If you were to look at this as to how much memory you can store in a system, a 32-bit processor can access 4 gigabytes of information, whereas a 64-bit processor can access 17 billion gigabytes of information. This doesn’t necessarily mean that the 64-bit operating system you’re using can access 17 billion gigabytes, because most operating systems will have a maximum supported value for the OS.

If you want to see the system type in your Windows system, you can go to the Control Panel under the System settings, and it will tell you the system type. In this example, I’m using a 64-bit operating system with an x64-based processor.

The hardware drivers that you install must match the type of operating system you’re using. So if you’re using a 32-bit operating system, then you need to use 32-bit hardware drivers. If you have a 64-bit operating system, then you need to use a 64-bit hardware driver. Sometimes you’ll see this 32-bit software abbreviated as x86 software. This is a reference back to the Intel 8086 line of processors. If it’s a 64-bit processor, we abbreviate that as an x64.

It’s also important to know that if you’re using a 32-bit operating system, that you cannot run 64-bit applications in that OS. Conversely, if you’re running a 64-bit operating system, you can not only run 64-bit applications, but you can also run 32-bit applications as well. If you don’t know if the applications you’re using in Windows have been written for a 64-bit operating system or a 32-bit operating system, you can look to see where they’ve been installed. 32-bit applications are installed under Program Files x86 and 64-bit apps are simply installed under Program Files.

There’s another family of operating systems called the Advanced Risk Machine, or ARM. This is an architecture that was developed by ARM Limited. They designed the specifications for the hardware, and then third parties use those specifications to create ARM-based CPUs. The ARM architecture is well known for being extremely efficient and fast in its processing. It uses less power, creates less heat, and it’s perfect for our mobile devices. Although we commonly see ARM used for mobile devices and internet of things, the capabilities of ARM-based architectures are greatly expanding. And we’re starting to blur the lines a bit between the traditional 64-bit operating systems and the ARM-based operating systems.

We often refer to a CPU, or a Central Processing Unit, as a single, monolithic device. All the information goes into the CPU, and then we get results out of the CPU. But inside of the CPU, there are lot of individual components. The main processing of a CPU occurs on the processor core. And generally, in today’s CPUs, there are multiple cores that are on a single physical CPU package. Sometimes we refer to these as dual core, quad core, or simply multi-core. And newer processors are increasing the number of cores in our operating systems all the time.

It’s also not unusual for the multiple cores to also have multiple caches. These might have caches that are dedicated for a core, or there may be shared caches that are used across all of the cores. These caches are designed to help speed the processing of information into and out of the CPU.

In reality, we’re not getting twice the amount of work from one single device. Instead, it simply increases the throughput of the processes going through the CPU by somewhere around 15% to 30%. Not only do you need a CPU that supports hyper-threading, but your operating system also has to support it as well. Today any modern operating system supports hyper-threading. And if you bring up some CPU monitoring, you’ll very quickly see the results of this hyper-threading technology.

Many CPUs also include hardware that allow us to virtualize additional operating systems on our computer. This means that we could load Windows as our primary desktop, and inside of Windows, we could run other Windows instances, or instances of other operating systems, such as Linux. Virtualization itself is resource intensive. So it made sense to take a lot of that functionality that normally would be in software and put it directly into the hardware of the CPU.

If you have an Intel processor in your system, you can check your BIOS and see if it supports the Intel Virtualization Technology or VT. If you’re running an AMD processor, then you may be running AMD Virtualization, or AMD-V. Some virtualization software requires that you enable these capabilities in your CPU. So check with your documentation and your BIOS to make sure you’re using the proper configurations for your virtualization system.

## Expansion Cards

## Cooling
