---
title: Storage Devices
description: We rely on our storage devices for access to our most important documents. Learn about the many ways to store and access files on our computing devices.
pubDatetime: 2023-09-12T15:34:39.302Z
postSlug: hardware-storage-devices
dynamicOgImg: https://images.unsplash.com/photo-1484662020986-75935d2ebc66
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

Data storage is the collective methods and technologies that capture and retain digital information on electromagnetic, optical or silicon-based storage media. Storage is used in offices, data centers, edge environments, remote locations and people's homes. Storage is also an important component in mobile devices such as smartphones and tablets. Consumers and businesses rely on storage to preserve information ranging from personal photos to business-critical data.

The term storage can refer to both the stored data and to the integrated hardware and software systems used to capture, manage, secure and prioritize that data. The data might come from applications, databases, data warehouses, archives, backups, mobile devices or other sources, and it might be stored on premises, in edge computing environments, at colocation facilities, on cloud platforms or any combination of these.

Storage is frequently used to describe devices that connect to a computer either directly or over a network, and that support the transfer of data through input/output (I/O) operations. Storage devices can include hard disk drives (HDDs), flash-based solid-state drives (SSDs), optical disc drives, tape systems and other media types.

### Hard disk drive (HDD)

A computer hard disk drive (HDD) is a non-volatile data storage device. Non-volatile refers to storage devices that maintain stored data when turned off. That means that we could power on our system and access any bit of data without having to forward or rewind information like you might with a tape drive.

They can store operating systems, software programs and other files using magnetic disks. More specifically, hard disk drives control the reading and writing of the hard disk that provides data storage. We refer to access on a hard disk drive as `random access`.

HDDs are used either as the primary or secondary storage device in a computer. They are commonly found in the drive bay and are connected to the motherboard via an Advanced Technology Attachment (ATA), [Serial ATA](/posts/hardware-cables-and-adapters/#sata-device-cables), [Parallel ATA](/posts/hardware-cables-and-adapters/#pata-device-cables) or [Small Computer System Interface (SCSI) cable](/posts/hardware-cables-and-adapters/#scsi-device-cables), among other formats. The HDD is also connected to a power supply unit and can keep stored data while powered down.

Most basic hard drives consist of several disk platters, a circular disk made of either aluminum, glass or ceramic, that are positioned around a spindle inside a sealed chamber. The platter spins with a motor that is connected to the spindle. The chamber also includes the read/write heads that magnetically record information to and from tracks on the platters using a magnetic head. The disks also have a thin magnetic coating on them.

The motor spins the platters at up to 15,000 rotations per minute. As the platters spin, a second motor controls the position of the read and write heads that magnetically record and read information on each platter.

Hard disk drive components include the spindle, disk platter, actuator, actuator arm and read/write head. Even though the term can refer to the unit as a whole, the term _hard disk_ is the set of stacked disks, in other words, the part of the HDD that stores and provides access to data on an electromagnetically charged surface.

The HDD form factor refers to the physical size or geometry of the data storage device. HDD form factors follow a set of industry standards that govern their length, width and height, as well as the position and orientation of the host interface connector. Having an industry-standard form factor helps determine a common compatibility with different computing devices.

The most common form factors for HDDs in enterprise systems are 2.5-inch and 3.5-inch -- also known as small form factor (SFF) and large form factor (LFF). The 2.5-inch and 3.5-inch measurements represent the approximate diameter of the platter within the drive enclosures.

While there are other form factors, by 2009, manufacturers discontinued the development of products with 1.3-inch, 1-inch and 0.85-inch form factors. The falling price of flash made these other form factors almost obsolete. It is also important to note that while nominal sizes are in inches, actual dimensions are specified in millimeters.

### Solid state drive (SSD)

An SSD, or solid-state drive, is a type of storage device used in computers. This non-volatile storage media stores persistent data on solid-state flash memory. SSDs replace traditional hard disk drives (HDDs) in computers and perform the same basic functions as a hard drive. But SSDs are significantly faster in comparison. With an SSD, the device's operating system will boot up more rapidly, programs will load quicker and files can be saved faster.

A traditional hard drive consists of a spinning disk with a read/write head on a mechanical arm called an actuator. An HDD reads and writes data magnetically. The magnetic properties, however, can lead to mechanical breakdowns.

By comparison, an SSD has no moving parts to break or spin up or down. The two key components in an SSD are the flash controller and NAND flash memory chips. This configuration is optimized to deliver high read/write performance for sequential and random data requests.

SSD manufacturers offer diverse form factors. The most common form factor is a 2.5-inch SSD that is available in multiple heights and supports SAS, SATA and NVMe protocols.

Types of SSDs include:

1. **Solid-state drives.** Basic SSDs deliver the least performance. SSDs are flash devices that connect via Serial Advanced Technology Attachment (SATA) or serial-attached SCSI (SAS) and provide a cost-effective first step into the solid-state world. For many environments, the performance boost in sequential read speeds from a SATA or SAS SSD will suffice.
2. **PCIe-based flash. Peripheral Component Interconnect Express**-based flash is the next step up in performance. While these devices typically offer greater throughput and more input/output operations per second, the biggest advantage is significantly lower latency. The downside is that most of these offerings require a custom driver and have limited built-in data protection.
3. **Flash DIMMs.** Flash dual in-line memory modules reduce latency, going further than PCIe flash cards by eliminating the potential PCIe bus contention. They require custom drivers unique to flash DIMMS, with specific changes to the read-only I/O system on the motherboard.
4. **NVMe SSDs.** These SSDs use the non-volatile memory express ([NVMe](https://www.techtarget.com/searchstorage/definition/NVMe-non-volatile-memory-express)) interface specification. This accelerates data transfer speeds between client systems and solid-state drives over a PCIe bus. NVMe SSDs are designed for high-performance non-volatile storage and are well-suited for highly demanding, compute-intensive settings.
5. **NVMe-oF.** The [NVMe over Fabrics](https://www.techtarget.com/searchstorage/definition/NVMe-over-Fabrics-Nonvolatile-Memory-Express-over-Fabrics) protocol enables data transfers between a host computer and a target solid-state storage device. NVMe-oF transfers data through methods such as Ethernet, Fibre Channel or InfiniBand.
6. **Hybrid DRAM-flash storage.** This dynamic random access memory ([DRAM](https://www.techtarget.com/searchstorage/definition/DRAM)) channel configuration combines flash and server DRAM. These hybrid flash storage devices address the theoretical scaling limit of DRAM and are used to increase throughput between application software and storage.

Two newer form factors worth noting are M.2 and U.2 SSDs. An M.2 SSD varies in length -- typically from 42 millimeters (mm) to 110 mm -- and attaches directly to a motherboard. It communicates via NVMe or SATA. The small size of an M.2 limits the surface area for heat dissipation which, over time, will reduce its performance and stability. In enterprise storage, M.2 SSDs often are used as a boot device. In consumer devices, such as notebook computers, an M.2 SSD provides capacity expansion.

A U.2 SSD describes a 2.5-inch PCIe SSD. These small form-factor devices were formerly known as SFF-8639. The U.2 interface enables high-speed NVMe-based PCIe SSDs to be inserted in a computer's circuit board, without the need to power down the server and storage.

### Flash memory

Flash memory, also known as flash storage, is a type of nonvolatile memory that erases data in units called blocks and rewrites data at the byte level. Flash memory is widely used for storage and data transfer in consumer devices, enterprise systems and industrial applications. Flash memory retains data for an extended period regardless of whether a flash-equipped device is powered on or off.

Flash memory is used in enterprise data center server, storage and networking technology as well as in a wide range of consumer devices, including USB flash drives also known as memory sticks SD cards, mobile phones, digital cameras, tablet computers, and PC cards in notebook computers and embedded controllers.

There are two types of flash memory: NAND and NOR. NAND flash-based solid-state drives (SSDs) are often used to accelerate the performance of I/O-intensive applications. NOR flash memory is often used to hold control code, such as the BIOS in a PC.

Flash memory is also used for in-memory computing to help speed performance and scalability of systems that manage and analyze large sets of data.

### Optical disk drive

Optical drives retrieve and/or store data on optical discs like CDs, DVDs, and BDs (Blu-ray discs), any of which hold much more information than previously available portable media options like the floppy disk. Some computers no longer come with a built-in disc drive, which is an issue if you have a disc you want to read or write to. Fortunately, manufacturers still develop external disc drives.

If you decide you do need an optical disc drive, but you want to go the easy route and avoid opening your computer to install it, you can just purchase an external one that works in most of the same ways as a regular internal one but plugs into the computer on the outside via USB.

External disc drives are the alternative for reading, writing, and playing back disc media. These Blu-ray drives are not the same as Blu-ray players. While they can play Blu-ray movies on your computer, they’re also designed to write and read other kinds of data stored on Blu-ray discs.

## RAID

It’s not uncommon to use hard drives to store large amounts of information. Terabytes upon terabytes of your data can be stored on the single spinning drive. and because there are a lot of movements parts inside of these drives, they will eventually fail. Fortunately, there are things you can do so that when a drive fails, your data will always remain available.

Redundant array of independent disks, also known as [RAID](https://www.techtarget.com/searchstorage/definition/RAID), is a way of storing the same data in different places on multiple hard disks or solid-state drives (SSDs) to protect data in the case of a drive failure. There are different RAID levels, however, and not all have the goal of providing redundancy.

RAID works by placing data on multiple disks and allowing input/output (I/O) operations to overlap in a balanced way, improving performance. Because using multiple disks increases the mean time between failures, storing data redundantly also increases fault tolerance. RAID arrays appear to the operating system (OS) as a single logical drive.

RAID employs the techniques of disk mirroring or disk striping. Mirroring will copy identical data onto more than one drive. Striping [partitions](https://www.techtarget.com/searchstorage/definition/partition) help spread data over multiple disk drives. Each drive's storage space is divided into units ranging from a [sector](https://www.techtarget.com/searchstorage/definition/sector) of 512 bytes up to several megabytes. The stripes of all the disks are interleaved and addressed in order. Disk mirroring and disk striping can also be combined in a RAID array.

### RAID controller

A [RAID controller](https://www.techtarget.com/searchstorage/definition/RAID-controller) is a device used to manage hard disk drives in a storage array. It can be used as a level of abstraction between the OS and the physical disks, presenting groups of disks as logical units. Using a RAID controller can improve performance and help protect data in case of a crash.

A RAID controller may be hardware- or software-based. In a [hardware-based RAID](https://www.techtarget.com/searchstorage/definition/hardware-RAID-hardware-redundant-array-of-independent-disk) product, a physical controller manages the entire array. The controller can also be designed to support drive formats such as Serial Advanced Technology Attachment and Small Computer System Interface. A physical RAID controller can also be built into a server's motherboard.

With [software-based RAID](https://www.techtarget.com/searchstorage/definition/software-RAID-software-redundant-array-of-independent-disk), the controller uses the resources of the hardware system, such as the central processor and memory. While it performs the same functions as a hardware-based RAID controller, software-based RAID controllers may not enable as much of a performance boost and can affect the performance of other applications on the server.

### RAID levels

RAID devices use different versions, called levels. The original paper that coined the term and developed the RAID setup concept defined six levels of RAID (0-5). This numbered system enabled those in IT to differentiate RAID versions. The number of levels has since expanded and has been broken into standard and nested categories.

**This table illustrates the different types of RAID levels**:

| RAID Level               | Description                                                                                                                                                                                                                                                                                                                    | Category | Advantages                                                                                                                                                                                                         | Disadvantages                                                                                                                                                                                                                                    |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| RAID 0 (striping)        | This configuration has striping but no redundancy of data. It offers the best performance, but it does not provide fault tolerance. RAID 0 is used by those wanting the most speed out of two or more drives.                                                                                                                  | Standard | Because the data is split across both drives, the speed of data reading and writing increases as more disks are added.                                                                                             | Every drive has a limited lifespan and each disk adds another point of failure to the RAID. Every disk in a RAID 0 is critical – losing any of them means the entire RAID (and all of the data) is lost.                                         |
| RAID 1 (mirroring)       | This configuration consists of at least two drives that duplicate the storage of data. There is no striping. Read performance is improved, since either disk can be read at the same time. Write performance is the same as for single disk storage.                                                                           | Standard | This is the safest option for your data. If one drive is lost, your data still exists in its complete form, and takes no time to recover.                                                                          | Your investment in data safety increases your drive costs since each RAID 1 volume requires two drives.                                                                                                                                          |
| RAID 2                   | This configuration uses striping across disks, with some disks storing error checking and correcting (ECC) information. RAID 2 also uses a dedicated Hamming code parity, a linear form of ECC. RAID 2 has no advantage over RAID 3 and is no longer used.                                                                     | Standard |                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                  |
| RAID 3                   | A rare implementation of parity striping. Its limitation is that it cannot service multiple requests.                                                                                                                                                                                                                          | Standard |                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                  |
| RAID 4                   | This level uses large stripes, which means a user can read records from any single drive. Overlapped I/O can then be used for read operations. Because all write operations are required to update the parity drive, no I/O overlapping is possible.                                                                           | Standard |                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                  |
| RAID 5 (parity striping) | The parity information is striped across each drive, enabling the array to function, even if one drive were to fail. The array's architecture enables read and write operations to span multiple drives. RAID 5 requires at least three disks, but it is often recommended to use at least five disks for performance reasons. | Standard | Results in performance better than that of a single drive, but not as high as a RAID 0 array. You can lose any one disk and not lose your backup data. Just replace the disk with a new one.                       | Your investment in data safety increases your drive costs since at least three drives are needed. In addition, the performance impact associated with writing parity data. When a disk fails, it can take a long time to rebuild a RAID 5 array. |
| RAID 6                   | This technique is similar to RAID 5, but it includes a second parity scheme distributed across the drives in the array. The use of additional parity enables the array to continue functioning, even if two disks fail simultaneously. RAID 6 arrays often have slower write performance than RAID 5 arrays.                   | Standard | It allows for the failure of two disks simultaneously with no data loss.                                                                                                                                           | Slightly slower than RAID 5 on writes but there is no added delay for reads.                                                                                                                                                                     |
| RAID 10 (RAID 1+0)       | Combining RAID 1 and RAID 0, this level is often referred to as RAID 10, which offers higher performance than RAID 1, but at a much higher cost. In RAID 1+0, the data is mirrored and the mirrors are striped.                                                                                                                | Nested   | RAID 10 is secure because mirroring duplicates all your data. It’s fast because the data is striped across two or more disks, meaning chunks of data can be read and written to different disks                    |                                                                                                                                                                                                                                                  |
| RAID 50 (RAID 5+0)       | This configuration combines RAID 5 distributed parity with RAID 0 striping to improve RAID 5 performance without reducing data protection.                                                                                                                                                                                     | Nested   | Provides great balance between storage performance, storage capacity, and data integrity that’s not necessarily found in other RAID levels.One drive from each of the RAID 5 sets could fail without loss of data. | The time spent in recovery (detecting and responding to a drive failure, and the rebuild process to the newly inserted drive) represents a period of vulnerability to the RAID set.                                                              |
| RAID 60 (RAID 6+0)       | A RAID 60 combines the straight block-level striping of RAID 0 with the distributed double parity of RAID 6. That is, a RAID 0 array striped across RAID 6 elements. It requires at least eight drives.                                                                                                                        | Nested   | A great fit when you need higher usable capacity and better reliability.                                                                                                                                           | Slight loss in write speed and performance.                                                                                                                                                                                                      |
