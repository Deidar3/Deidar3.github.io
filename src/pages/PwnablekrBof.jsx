import BlueShadowText from "../components/BlueShadowText"
import bof from '../assets/pwnablekr/bof/bof.png';
import description from '../assets/pwnablekr/bof/description.png';
import { CopyBlock } from 'react-code-blocks';

function PwnablekrBof() {
    return (
        <div className='flex flex-col justify-center items-center pt-2 pb-10'>
              
            <BlueShadowText text={"Pwnable.kr - bof"} />

            <div className='flex flex-col justify-center items-center'>
                <img className='border-2 border-yellow-400' src={bof} alt="bof" />
                <br />
                <p className="text-center w-2/5">
                    This challenge is an introduction into buffer overflow.
                    If you are new to Binary Exploitation or cybersecurity in general,
                    I recommend checking out videos by <a href="https://www.youtube.com/watch?v=iyAyN3GFM7A&list=PLhixgUqwRTjxglIswKp9mpkfPNfHkzyeN" className="font-bold" target="_blank">LiveOverflow</a> - he provides great IT security educational content!
                </p>
                <div className="w-[500px]">
                    <p className="text-center mt-5 font-bold">
                        Description:
                    </p>
                    <img className='rounded-md' src={description} alt="description" />
            
                </div>
                <p className="mt-5 text-center w-2/5">
                    As description says, we have to connect to a server using <a href="https://www.ssh.com/academy/ssh/protocol" className="font-bold text-blue-400" target="_blank">SSH protocol</a>.

                    <br />
                    <br />

                    After connecting we find that there are 3 files in current directory:
                    <ul className="text-left mt-2 list-disc">
                    <li className="mb-2"><i className="font-bold">bof</i> - 32-bit ELF executable</li> 
                    <li className="mb-2"><i className="font-bold">bof.c</i> - Source code</li> 
                    <li className="mb-10"><i className="font-bold">readme</i> - Contains information about solving challenge (bof binary is running at "nc 0 9000" under bof_pwn privilege. get shell and read flag)</li> 
                    </ul>
            
                    using wget we can fetch binaries to our system wget http://pwnable.kr/bin/bof wget http://pwnable.kr/bin/bof.c
                </p>
            
                <div className="bg-gray-50 p-5">

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

              
        </div>
    );
}

export default PwnablekrBof