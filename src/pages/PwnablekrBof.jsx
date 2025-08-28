import BlueShadowText from "../components/BlueShadowText"
import bof from '../assets/pwnablekr/bof/bof.png';
import gef_main from '../assets/pwnablekr/bof/gef_main.png';
import gef_func from '../assets/pwnablekr/bof/gef_func.png';
import gef_cmp from '../assets/pwnablekr/bof/gef_cmp.png';
import gef_breakpoint_run from '../assets/pwnablekr/bof/gef_breakpoint_run.png';
import triggered_breakpoint from '../assets/pwnablekr/bof/triggered_breakpoint.png';
import overflow_AAA from '../assets/pwnablekr/bof/overflow_AAA.png';
import gef_python_first_run from '../assets/pwnablekr/bof/gef_python_first_run.png';
import ebp_0x8_examine from '../assets/pwnablekr/bof/ebp_0x8_examine.png';
import bebafeca from '../assets/pwnablekr/bof/bebafeca.png';
import cafebabe from '../assets/pwnablekr/bof/cafebabe.png';
import segfault from '../assets/pwnablekr/bof/segfault.png';
import description from '../assets/pwnablekr/bof/description.png';
import kernel_syscall from '../assets/pwnablekr/bof/kernel_syscall.png';
import local_success from '../assets/pwnablekr/bof/local_success.png';
import remote_success from '../assets/pwnablekr/bof/remote_success.png';
import { CopyBlock } from 'react-code-blocks';

function PwnablekrBof() {
    return (
        <div className='flex flex-col justify-center items-center pt-2 pb-10 px-4 sm:px-6 lg:px-8'>
              
            <BlueShadowText text={"Pwnable.kr - bof"} />

            <div className='flex flex-col justify-center items-center max-w-4xl w-full'>
                <img className='border-2 border-yellow-400 w-[200px]' src={bof} alt="bof" />
                <br />
                <p className="text-center w-full max-w-3xl px-4 sm:px-0">
                    This challenge is an introduction to buffer overflow.
                    If you are new to Binary Exploitation or cybersecurity in general,
                    I recommend checking out videos by <a href="https://www.youtube.com/watch?v=iyAyN3GFM7A&list=PLhixgUqwRTjxglIswKp9mpkfPNfHkzyeN" className="font-bold" target="_blank" rel="noopener noreferrer">LiveOverflow</a> - he provides great IT security educational content!
                </p>
                
                <div className="w-full max-w-2xl mt-8">
                    <p className="text-center mt-5 font-bold">
                        Description:
                    </p>
                    <img className='rounded-md w-full h-auto' src={description} alt="description" />
                </div>
                
                <div className="w-full max-w-4xl mt-8 px-4 sm:px-0">
                    <p className="text-center mb-4">
                        As description says, we have to connect to a server using <a href="https://www.ssh.com/academy/ssh/protocol" className="font-bold text-blue-400" target="_blank" rel="noopener noreferrer">SSH protocol</a>.
                    </p>

                    <p className="text-left mb-4">
                        After connecting we find that there are 3 files in the current directory:
                    </p>
                    <ul className="text-left mt-2 mb-6 list-disc pl-6">
                        <li className="mb-2"><i className="font-bold">bof</i> - 32-bit ELF executable</li> 
                        <li className="mb-2"><i className="font-bold">bof.c</i> - Source code</li> 
                        <li className="mb-4"><i className="font-bold">readme</i> - Contains following information about challenge: <br/> <i>bof binary is running at "nc 0 9000" under bof_pwn privilege. get shell and read flag</i></li> 
                    </ul>
                    
                    <p className="mb-4">
                        For now we will disconnect to solve this challenge on our own machine first.
                        For this purpose we will use scp (Secure Copy Protocol) to copy files from remote server to our local machine.
                    </p>
                    
                    <div className="bg-gray-100 p-3 rounded-md mb-4 overflow-x-auto">
                        <div className="whitespace-nowrap">
                            <span className="text-red-500 font-bold">></span> scp -P2222 bof@pwnable.kr:/home/bof/bof .<br />
                            <span className="text-red-500 font-bold">></span> scp -P2222 bof@pwnable.kr:/home/bof/bof.c .
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-4xl mt-6">
                    <p className="text-center mb-4 font-semibold">In bof.c we can find following code:</p>
                    
                    <div className="bg-gray-50 p-3 sm:p-5 rounded-md overflow-x-auto">
                        <CopyBlock
                            text={`#include <stdio.h>
#include <string.h>
#include <stdlib.h>
void func(int key){
        char overflowme[32];
        printf("overflow me : ");
        gets(overflowme);       // smash me!
        if(key == 0xcafebabe){
                setregid(getegid(), getegid());
                system("/bin/sh");
        }
        else{
                printf("Nah..\\n");
        }
}
int main(int argc, char* argv[]){
        func(0xdeadbeef);
        return 0;
}`}
                            language={'C'}
                            showLineNumbers={true}
                        />
                    </div>
                </div>

                <div className="w-full max-w-4xl mt-8 px-4 sm:px-0">
                    <p className="mb-4">
                        Our goal is to execute system("/bin/sh"), but to do that we need to pass if check.
                        How can we do that, when access to key variable seems to be impossible?
                    </p>
                    
                    <p className="mb-4">
                        Looking at challenge description it might be useful to google what buffer overflow is.
                        I will not go in depth, there are a lot great of educational content that explains this topic well.
                    </p>

                    <p className="mb-4">
                        As example here is modernized version of the classic article:
                        <br />
                        <a href="https://avicoder.me/2016/02/01/smashsatck-revived/" className="text-blue-400 font-bold" target="_blank" rel="noopener noreferrer">Smashing the Stack for Fun & Profit : Revived</a>
                    </p>
                    
                    <p className="mb-4">
                        After learning the fundamentals of buffer overflows, we can proceed to solve the challenge.
                    </p>
                    
                    <p className="mb-4">
                        We can see that the C code uses gets() function, using man pages, we can find some very interesting information about it:
                    </p>
                    
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 italic">
                        "Never use gets(). Because it is impossible to tell without knowing the data in advance how many characters gets() will read, and because gets() will continue to store characters past the end of the buffer, it is extremely dangerous to use. It has been used to break computer security. Use fgets() instead."
                    </div>
                    
                    <p className="mb-4">
                        Knowing that gets() it is dangerous, we will focus on it.
                        The function is used on a char array of length 32. Since a char type is exactly 1 byte, 32 chars are equal to 32 bytes.
                        With that information we can begin our exploitation.
                    </p>
                    
                    <p className="mb-4">
                        Let's try to spam over 32 bytes of input to see what happens.
                    </p>
                    
                    <img src={overflow_AAA} alt="overflow_AAA" className="rounded-md mt-5 w-full max-w-2xl mx-auto h-auto" />
                    
                    <p className="mt-4 mb-4">
                        Smashing stack detected, so it confirms that we can exploit buffer overflow.
                    </p>
                    
                    <p className="mb-4">
                        Our starting point is to check the bof binary by using file command.
                    </p>
                    
                    <div className="bg-gray-100 p-3 rounded-md mb-4 overflow-x-auto">
                        <div className="whitespace-nowrap text-sm">
                            <span className="text-red-500 font-bold">></span> file bof<br />
                            bof: ELF 32-bit LSB pie executable, Intel 80386, version 1 (SYSV), dynamically linked, interpreter /lib/ld-linux.so.2, BuildID[sha1]=1cabd158f67491e9edb3df0219ac3a4ef165dc76, for GNU/Linux 3.2.0, not stripped
                        </div>
                    </div>
                    
                    <p className="mb-4">
                        To follow stack instructions, we can use gdb.
                        I will use <a href="https://github.com/hugsy/gef" className="text-blue-400 font-bold" target="_blank" rel="noopener noreferrer">gef</a>, which is a gdb plugin that makes it easier to work with.
                    </p>
                    
                    <p className="mb-4">Time to enter debugger:</p>
                    
                    <div className="bg-gray-100 p-3 rounded-md mb-4">
                        <span className="text-red-500 font-bold">></span>gdb ./bof
                    </div>
                    
                    <p className="mb-4">
                        Inside gef we will run bof binary so it loads into memory at its runtime addresses, allowing to show real instructions.
                    </p>
                    
                    <img src={gef_python_first_run} alt="gef_python_12_a" className='rounded-md mt-5 w-full max-w-2xl mx-auto h-auto' />
                    
                    <p className="mt-4 mb-4">Now we will disassemble main function to see how it works:</p>
                    
                    <img className='rounded-md mt-5 w-full max-w-2xl mx-auto h-auto' src={gef_main} alt="gef_main" />
                    
                    <p className="mt-4 mb-4">
                        We can see 0xdeadbeef being pushed to stack, and then func() being called.
                    </p>
                    
                    <p className="mb-4">Let's disassemble func() to see how it works:</p>
                    
                    <img className='rounded-md mt-5 w-full max-w-2xl mx-auto h-auto' src={gef_func} alt="gef_func" />
                    
                    <p className="mt-4 mb-4">
                        In func() especially interesting is line &lt;+63&gt;, where 0xdeadbeef is being compared to key variable after gets() function is called.
                    </p>
                    
                    <img className='rounded-md mt-5 w-full max-w-2xl mx-auto h-auto' src={gef_cmp} alt="gef_cmp" />
                    
                    <p className="mt-4 mb-4">
                        We have to overwrite DWORD PTR [ebp±0x8] with 0xcafebabe in order to get shell.
                        <br />
                        <span className="text-sm italic">(DWORD PTR = Double Word Pointer with length of 4 bytes.)</span>
                    </p>
                    
                    <p className="mb-4">
                        We will set a breakpoint at that line to observe what happens when we run the program with a long string:
                    </p>
                    
                    <img className='rounded-md mt-5 w-full max-w-2xl mx-auto h-auto' src={gef_breakpoint_run} alt="gef_breakpoint_run" />
                    
                    <p className="mt-4 mb-4">The program successfully stopped at the breakpoint, allowing us to see what is stored in the key variable:</p>
                    
                    <img className='rounded-md mt-5 w-full max-w-2xl mx-auto h-auto' src={triggered_breakpoint} alt="triggered_breakpoint" />
                    
                    <div className="text-center my-6">
                        <p className="mb-4">We can examine the memory at [ebp + 0x8] to see what is stored there:</p>
                        <img className='rounded-md w-full max-w-lg mx-auto h-auto' src={ebp_0x8_examine} alt="ebp_0x8_examine" />
                        <div className="mt-2 text-sm">
                            <b>x</b> - examine memory<br />
                            <b>/xw</b> - display word size in hexadecimal (in this case show 4 bytes in hex)
                        </div>
                    </div>
                    
                    <p className="mb-4">
                        But what is this 0x47474747? In ASCII table, 0x47 corresponds to the 'G' character.
                        Knowing this, we can remove everything from our payload after the letter 'F', leaving us with the following payload:
                    </p>
                    
                    <div className="text-center font-semibold bg-gray-100 p-4 rounded-md my-4 overflow-x-auto">
                        <div className="whitespace-nowrap text-sm sm:text-base">
                            AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBBBCCCCDDDDEEEEFFFF
                        </div>
                    </div>
                    
                    <p className="mb-4">
                        Now we need to append 0xcafebabe to our payload, but how can we do that?
                        We can use python 2 to convert the bytes to ASCII and save them into a file:
                    </p>
                    
                    <div className="bg-gray-100 p-3 rounded-md mb-4 overflow-x-auto">
                        <div className="whitespace-nowrap text-sm font-semibold">
                            <span className="text-red-500">></span> python -c 'print "A"*32 + "BBBBCCCCDDDDEEEEFFFF" + "\xca\xfe\xba\xbe"' > payload
                        </div>
                    </div>
                    
                    <p className="mb-4">Now we can run gdb again. After setting the breakpoint as before, we will use our payload as the input:</p>
                    
                    <div className="bg-gray-100 p-3 rounded-md mb-4">
                        <span className="text-green-500 font-bold">gef➤</span> run &lt; payload
                    </div>
                    
                    <p className="mb-4">After hitting the breakpoint, we will examine memory at [ebp + 0x8] again to verify if it worked:</p>
                    
                    <img className='rounded-md mt-5 w-full max-w-lg mx-auto h-auto' src={bebafeca} alt="bebafeca" />
                    
                    <p className="mt-4 mb-4">
                        Wait, why is there 0xbebafeca instead of 0xcafebabe?
                    </p>
                    
                    <p className="mb-4">
                        If you are familiar with little-endian and big-endian you might know that in little-endian the least significant byte is stored first.
                    </p>
                    
                    <p className="mb-4">We can resolve this issue by reversing the order of bytes in our payload.</p>
                    
                    <div className="bg-gray-100 p-3 rounded-md mb-4 overflow-x-auto">
                        <div className="whitespace-nowrap text-sm font-semibold">
                            <span className="text-red-500">></span> python -c 'print "A"*32 + "BBBBCCCCDDDDEEEEFFFF" + "\xbe\xba\xfe\xca"' > payload
                        </div>
                    </div>
                    
                    <p className="mb-4">This should fix the issue. Now we can run gdb again and check if it works:</p>
                    
                    <img className='rounded-md mt-5 w-full max-w-lg mx-auto h-auto' src={cafebabe} alt="cafebabe" />
                    
                    <p className="mt-4 mb-4">
                        This time it was successful, 0xcafebabe is stored in memory at [ebp + 0x8].
                        Now we can continue program execution by using <b className="text-red-500">c</b> command in gdb.
                    </p>
                    
                    <img className='rounded-md mt-5 w-full max-w-lg mx-auto h-auto' src={kernel_syscall} alt="kernel_syscall" />
                    
                    <p className="mt-4 mb-4">
                        It crashed due to stack smashing detection, but it attempted to spawn a shell.
                    </p>
                    
                    <p className="mb-4">Maybe its gdb issue? Let's try running the bof binary outside of gdb this time.</p>
                    
                    <img className='rounded-md mt-5 w-full max-w-lg mx-auto h-auto' src={segfault} alt="segfault" />
                    
                    <p className="mt-4 mb-4">
                        Stack smashing is still detected, does this mean that our payload did not work?
                    </p>
                    
                    <p className="mb-4">
                        Well, not quite! We get a 'stack smashing detected' error after executing system("/bin/sh") command, which means that we successfully executed it!
                        The issue is that the program does not stop when we get a shell, so we need to find a way to pause it.
                        Luckily there is a trick using the cat command that allows us to do that!
                    </p>
                    
                    <div className="text-center bg-blue-50 p-6 rounded-md my-6">
                        <div className="text-lg sm:text-xl font-semibold overflow-x-auto">
                            <div className="whitespace-nowrap">
                                (cat payload; cat) | ./bof
                            </div>
                        </div>
                    </div>
                    
                    <p className="mb-4">
                        But how does it work? First cat command sends the payload, while the second cat keeps stdin open. When the program spawns a shell after the exploit, the shell's stdin is still connected to your terminal, allowing interactive input.
                    </p>
                    
                    <img className='rounded-md mt-5 w-full max-w-2xl mx-auto h-auto' src={local_success} alt="local_success" />
                    
                    <p className="mt-6 mb-4">
                        Success! We now have a shell! Let's use it remotely to retrieve the flag.
                    </p>
                    
                    <p className="mb-4">
                        After connecting to bof@pwnable.kr via ssh, we will repeat the same steps as before, but this time we will save our payload to a file in /tmp directory, due to restricted file write permissions.
                    </p>
                    
                    <img className='rounded-md mt-5 w-full max-w-2xl mx-auto h-auto' src={remote_success} alt="remote_success" />
                    
                    <div className="text-center bg-green-50 border-2 border-green-400 p-6 rounded-lg mt-8">
                        <p className="text-lg sm:text-xl font-bold text-red-500 mb-2">
                            We managed to get the flag! 🎉
                        </p>
                        <p className="text-base sm:text-lg">
                            You are officially a <span className="text-black text-xl sm:text-2xl font-extrabold">l33t h4x0r</span> now! 👾
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PwnablekrBof