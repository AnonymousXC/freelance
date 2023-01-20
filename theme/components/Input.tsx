/**
 * @author Chitrans@Thearcane
 * @usage The custom variant of an input does not apply on Input.
 *  Due to different inputs.
 *  So, this file contains custom component for Input.
 */

import { 
    Input,
} from "@chakra-ui/react";

function InputComponent(props : any) {
    return (
        <Input
        variant={'unstyled'}  
        rounded={'4px'}
        py={'12px'}
        px={'20px'}
        fontSize={'1.25rem'}
        fontFamily={'Hind'}
        color={'txt-s'}
        type={'text'}
        lineHeight={'auto'}
        backgroundColor={'input-bg'}
        {...props}/>
    )
}

export default InputComponent;