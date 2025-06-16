export default function LongButton({title}:{title:string}){
    return <div className="dark:bg-white bg-neutral-700 text-sm  text-white  dark:text-black text-center w-fit h-fit px-2 p-1  rounded-lg">
                
        {
            title
        }
    </div>
}