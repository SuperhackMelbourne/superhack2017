# 1. Install drivers
The chip used to communicate over USB with the ESP32 is not supported out of
the box by most computers (Mac or Windows). As such, you'll need to install
the relevant driver for your computer available from [Silicon Labs](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)

# 2. Install Mongoose OS
## 2.1 MacOS
Open a new Terminal window and enter the following command (copy and paste it
to minimise the chance of typos):
```
curl -fsSL https://mongoose-os.com/downloads/mos/install.sh | /bin/bash
```
> *Optionally you can add `~/.mos/bin` to your PATH so that you*
> *can call `mos` directly rather than with `~/.mos/bin/mos`. Ask us/Google it*
> *if this sounds like something you want to do*

## 2.2 Windows
Download the file [mos.exe](https://github.com/SuperhackMelbourne/superhack2017/raw/master/downloads/mos.exe) to a convenient location, such as your Documents folder.

## 2.3 Linux
Open a new Terminal window and enter the following commands:
```
sudo add-apt-repository ppa:mongoose-os/mos
sudo apt-get update
sudo apt-get install mos
```

# 3. Start Mongoose OS
First, plug in the ESP32 to an available USB port on your computer. Next open
up Mongoose OS as follows:

## 3.1 MacOS
Open a new Terminal window and type `~/.mos/bin/mos` followed by enter. This
will open the development environment in a new browser tab or window. Make sure
you leave the Terminal window open with the `mos` command running, otherwise the
website will stop working.

## 3.2 Windows
Double click on the mos.exe file you downloaded earlier to open the development
environment in a new browser tab or window. Make sure you leave the black
command window that pops up in the background running, otherwise the website
will stop running.

## 3.3 Linux
Open a new Terminal window and type `mos` followed by enter. This
will open the development environment in a new browser tab or window. Make sure
you leave the Terminal window open with the `mos` command running, otherwise the
website will stop working.

# 4. Connect to the ESP32 and adjust settings if necessary
Select the ESP32 under step 1 (it's likely /dev/cu.SLAB_USBtoUART on Mac, COMxx
where xx is some number on Windows) and press select. With any luck, after a
few seconds the device should be detected and some firmware information will
be shown under step 2. Adjust the WiFi settings if required, otherwise click
done!
